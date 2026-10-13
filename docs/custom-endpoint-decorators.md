---
url: /docs/custom-endpoint-decorators.md
description: >-
  Custom endpoint decorator could be interesting when you want to handle a
  request and perform actions before or after the endpoint method.
---

# Custom endpoint decorator

Custom endpoint decorator could be interesting when you want to handle a request and perform actions before or after the
endpoint method.

Unlike [Pipes](/docs/pipes.html) that operate on the parameters of a method, the endpoint decorator will operate on the
method itself.

It's based on the middleware and use one of these decorators to work:

* @@UseBefore@@: use the given middleware before the method,
* @@Use@@: use the given middleware after `UseBefore` but before the method,
* @@UseAfter@@: use the given middleware after the method.

## Built-in

Many other decorators are implemented and can be taken as an example to build your own endpoint decorator. Just follow
the links here and click on source link to see source code on Github:

## Build your own decorator

One of the use cases already implemented by Ts.ED is the @@PlatformAcceptMimesMiddleware@@:

```ts
import {uniq} from "@tsed/core";
import {Constant} from "@tsed/di";
import {NotAcceptable} from "@tsed/exceptions";
import {Middleware, MiddlewareMethods} from "@tsed/platform-middlewares";
import {Context} from "@tsed/platform-params";
import {JsonOperationRoute} from "@tsed/schema";

/**
 * @middleware
 * @platform
 */
@Middleware({
  priority: -10
})
export class PlatformAcceptMimesMiddleware implements MiddlewareMethods {
  @Constant("acceptMimes", [])
  protected acceptMimes: string[];

  $alterEndpointHandlers(handlers: AlterEndpointHandlersArg, operationRoute: JsonOperationRoute) {
    const hasAcceptMimes = operationRoute.endpoint.acceptMimes.length || this.acceptMimes.length;
    return {
      ...handlers,
      before: [hasAcceptMimes && PlatformAcceptMimesMiddleware, ...handlers.before].filter(Boolean) as any[]
    };
  }

  public use(@Context() ctx: Context): void {
    const {endpoint, request} = ctx;
    const mimes = uniq((endpoint?.get("acceptMimes") || []).concat(this.acceptMimes));

    if (mimes.length && !request.accepts(mimes)) {
      throw new NotAcceptable(mimes.join(", "));
    }
  }
}

```

You can see in this example the usage of `endpoint.get` from @@JsonMethodStore@@. This method contains all options
which can be passed to the decorator associated to PlatformAcceptMimesMiddleware.

```ts
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {AcceptMime, Get} from "@tsed/schema";

@Controller("/mypath")
export class MyCtrl {
  @Get("/")
  @AcceptMime("application/json")
  public getResource() {}
}

```

::: tip
This example uses @@AcceptMime@@ decorator with one option, the `application/json`.
This option will be set to `endpoint.get` seen before with PlatformAcceptMimesMiddleware example and can be retrieved by
using
`endpoint.get(PlatformAcceptMimesMiddleware)`.
:::

Ts.ED provides API to create your own decorator like @@AcceptMime@@ which registers the options and at least one
middleware
with these decorators and utils:

* @@Use@@, @@UseBeforeEach@@, @@UseBefore@@, or @@UseAfter@@ for middleware registration,
* @@useDecorators@@ if you want to combine different decorators,
* @@StoreMerge@@ or `StoreGet` to register options.

For example, we can take the @@AcceptMime@@ decorator as an example and see how it works. Here is its code:

```ts
import {PlatformAcceptMimesMiddleware} from "@tsed/platform-http";
import {UseBefore} from "@tsed/platform-middlewares";
import {useDecorators, StoreSet} from "@tsed/core";

export function AcceptMime(...mimes: string[]): Function {
  return useDecorators(StoreSet(PlatformAcceptMimesMiddleware, mimes), UseBefore(PlatformAcceptMimesMiddleware));
}

```

::: tip
It is also possible to create a custom endpoint decorator without Ts.ED middleware. If your action is really small,
you can register a pure express middleware to reach better performance.

```ts
import {UseAfter} from "@tsed/platform-middlewares";
import {useDecorators} from "@tsed/core";

export function CustomStatus(code: number) {
  return useDecorators(
    UseAfter((req: any, res: any, next: any) => {
      res.status(code);
      next();
    })
  );
}

```
