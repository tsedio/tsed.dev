---
url: /docs/authentication.md
description: >-
  Discover how to use authentication in Ts.ED to protect your route with your
  own strategy.
---

# Authentication

Ts.ED uses middlewares to protect your route with your own strategy. To handle correctly a request and protect your endpoints,
we have to use the @@UseAuth@@ decorator.

```ts
import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";
import {UseAuth} from "@tsed/platform-middlewares";
import {CustomAuthMiddleware} from "../guards/CustomAuthMiddleware";

@Controller("/dashboard")
@UseAuth(CustomAuthMiddleware, {role: "admin"}) // on class level for all endpoints
class DashboardCtrl {
  @Get("/")
  @UseAuth(CustomAuthMiddleware, {role: "admin"}) // or for specific endpoints
  public getResource() {}
}

```

::: tip
If you planned to use `Passport.js`, it's recommended to follow the [Passport.js guide here](/tutorials/passport.md).
:::

Any middleware can be used as an authentication strategy. Just keep in mind, to work properly, the middleware must use @@Context@@
decorator to retrieve the endpoint context execution.

## Usage

Here is an example of the CustomAuth middleware using the Passport.js method to check authentication:

```ts
import {Req} from "@tsed/platform-http";
import {Context} from "@tsed/platform-params";
import {Middleware, MiddlewareMethods} from "@tsed/platform-middlewares";
import {Forbidden, Unauthorized} from "@tsed/exceptions";

@Middleware()
export class CustomAuthMiddleware implements MiddlewareMethods {
  public use(@Req() request: Req, @Context() ctx: Context) {
    // retrieve options given to the @UseAuth decorator
    const options = ctx.endpoint.get(CustomAuthMiddleware) || {};

    if (!request.isAuthenticated()) {
      // passport.js method to check auth
      throw new Unauthorized("Unauthorized");
    }

    if (request.user?.role !== options.role) {
      throw new Forbidden("Forbidden");
    }
  }
}

```

## Create your Auth decorator

It could be practical to create you own Authentication decorator to reduce the amount of code.
For example, if we use swagger, we have to configure some extra **security** and **responses** information and it can quickly become heavy.

Example:

```ts
import {Controller} from "@tsed/di";
import {Get, Returns, Security} from "@tsed/schema";
import {UseAuth} from "@tsed/platform-middlewares";
import {Forbidden, Unauthorized} from "@tsed/exceptions";
import {CustomAuthMiddleware} from "../guards/CustomAuthMiddleware";

@Controller("/dashboard")
@UseAuth(CustomAuthMiddleware, {role: "admin"}) // on class level for all endpoints
@Security("oauth2", "email", "firstname")
class DashboardCtrl {
  @Get("/")
  @UseAuth(CustomAuthMiddleware, {role: "admin"}) // or for specific endpoints
  @Security("oauth2", "email", "firstname")
  @(Returns(401, Unauthorized).Description("Unauthorized"))
  @(Returns(403, Forbidden).Description("Forbidden"))
  public getResource() {}
}

```

To avoid that, we can create a decorator which apply all of these instructions automatically, like this:

```ts
import {UseAuth} from "@tsed/platform-middlewares";
import {useDecorators} from "@tsed/core";
import {Security, Returns} from "@tsed/schema";
import {CustomAuthMiddleware} from "../guards/CustomAuthMiddleware.js";

export interface AuthOpts extends Record<string, unknown> {
  role?: string;
  scopes?: string[];
}

export function CustomAuth(options: AuthOpts = {}): Function {
  return useDecorators(UseAuth(CustomAuthMiddleware, options), Security("oauth", ...(options.scopes || [])), Returns(401), Returns(403));
}

```

::: tip
Additionally, you can use the `In` decorator to add automatically the `Authorization` header field in the swagger spec:

```ts
import {In, Returns, Security} from "@tsed/schema";
import {UseAuth} from "@tsed/platform-middlewares";
import {useDecorators} from "@tsed/core";
import {CustomAuthMiddleware} from "../guards/CustomAuthMiddleware";

export interface CustomAuthOptions extends Record<string, unknown> {
  role?: string;
  scopes?: string[];
}

export function CustomAuth(options: CustomAuthOptions = {}): Function {
  return useDecorators(
    UseAuth(CustomAuthMiddleware, options),
    Security("oauth", ...(options.scopes || [])),
    In("header").Name("Authorization").Type(String).Required(true),
    Returns(401),
    Returns(403)
  );
}

```

:::

And use it on our controller and endpoints:

```ts
import {Get} from "@tsed/schema";
import {Controller} from "@tsed/di";
import {CustomAuth} from "../decorators/CustomAuth";

@Controller("/dashboard")
@CustomAuth({role: "admin", scopes: ["email", "firstname"]})
class DashboardCtrl {
  @Get("/")
  @CustomAuth({role: "admin", scopes: ["email", "firstname"]})
  public getResource() {}
}

```

## With Passport.js

Another solution is to use [Passport.js](/tutorials/passport.md) to protect your API. Ts.ED provide
a [@tsed/passport](/tutorials/passport.md) plugin in order to facilitate the use of this library within the framework.

The following codesandbox example show you how you can use this plugin combined with Swagger to describe your API:
