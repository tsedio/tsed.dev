---
url: /docs/injection-scopes.md
description: >-
  Discover how to use injection scopes in Ts.ED to define the lifecycle and
  visibility of a provider.
---

# Injection scopes

The scope of a [Provider](/docs/providers.md) defines the lifecycle and visibility of that bean in the context in which it is used.

Ts.ED DI defines 3 types of @@ProviderScope@@ which can be used on injectable classes:

* `singleton`: The default scope. The provider is created during server initialization and is shared across all requests.
* `request`: A new instance of the provider is created for each incoming request.
* `instance`: A new instance of the provider is created each time it is injected.

## Singleton scope

Singleton scope is the default behavior of all providers. That means all providers are created during server initialization.

```ts \[Functional API]
import {ProviderScope} from "@tsed/di";
import {Get} from "@tsed/schema";

export class MyController {
  private rand = Math.random() * 100;

  @Get("/random")
  getValue() {
    return this.rand;
  }
}

controller(MyController).path("/").scope(ProviderScope.SINGLETON);

```

In this example all requests on `/random` endpoint return the same random value.

## Request scope

Request scope will create a new instance of provider for each incoming request. A new container will be created
and attached to the request. It will contain all providers annotated by `@Scope(ProviderScope.REQUEST)`.

```ts \[Functional API]
import {ProviderScope, controller} from "@tsed/di";
import {Get} from "@tsed/schema";

export class MyController {
  // Generates a random number between 0 and 100 for each request
  private rand = Math.random() * 100;

  @Get("/random")
  getRequestScopedRandom() {
    return this.rand;
  }
}

controller(MyController).path("/").scope(ProviderScope.REQUEST);

```

Each request on `/random` will return a different random value.

### Chain with Service

It is also possible to use `@Scope(ProviderScope.REQUEST)` on a service if your service is injected on a controller
which is annotated by `@Scope(ProviderScope.REQUEST)` too.

Here is a working example:

```ts \[Functional API]
import {ProviderScope} from "@tsed/di";
import {Get} from "@tsed/schema";

export class MyService {
  public rand = Math.random() * 100;
}

export class MyController {
  private myService = inject(MyService);

  @Get("/random")
  getValue() {
    return this.myService.rand;
  }
}

injectable(MyService).scope(ProviderScope.REQUEST);
controller(MyController).path("/").scope(ProviderScope.REQUEST);

```

And here is an example that doesn't work:

```ts \[Functional API]
import {ProviderScope} from "@tsed/di";
import {Get} from "@tsed/schema";

export class MyService {
  public rand = Math.random() * 100;
}

export class MyController {
  private myService = inject(MyService); // MyService is a singleton because MyController is a singleton

  @Get("/random")
  getValue() {
    return this.myService.rand;
  }
}

injectable(MyService).scope(ProviderScope.REQUEST);
controller(MyController).path("/").scope(ProviderScope.SINGLETON);

```

The `SINGLETON` annotation avoids the `@Scope(ProviderScope.REQUEST)` annotation put on MyService.
To work, the controller must have the scope `REQUEST` and each transitive injected service must have the same scope.

::: warning Note
The Request scope has cost performance. It's recommended to use it only when necessary. If you just need a context to store
data during the request, you can use the [Request Context](/docs/request-context.md) instead.
:::

::: warning
The `@Scope(ProviderScope.REQUEST)` annotation has no effect on Global middlewares.
:::

## Instance scope

Instance scope used on a provider tells the injector to create a new instance each time the provider is injected to another one.

```ts \[Functional API]
import {Get} from "@tsed/schema";

export class MyInstanceService {
  private rand = Math.random() * 100;

  @Get("/random")
  getValue() {
    return this.rand;
  }
}

export class MyController {
  constructor() {
    const instance1 = inject(MyInstanceService);
    const instance2 = inject(MyInstanceService);
    console.log("IsSame", instance1 === instance2); // false
    console.log("instance1", instance1.getValue());
    console.log("instance2", instance2.getValue());
  }
}

injectable(MyInstanceService).scope(ProviderScope.INSTANCE);
controller(MyController); // by default, the scope is SINGLETON

```

::: tip Note
With the functional API, you can also rebuild any service on the fly by calling @@inject@@ with the `rebuild` flag:

```typescript
import {inject} from "@tsed/di";

const myService = inject(MyService, {rebuild: true});
```
