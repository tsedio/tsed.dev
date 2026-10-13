---
url: /docs/custom-providers.md
description: >-
  Learn how to create custom providers in Ts.ED to bind something directly to
  the IoC container.
---

# Custom providers

There are a lot of scenarios where you might want to bind something directly to the IoC container.
For example, any constant values, configuration objects created based on the current environment,
external libraries, or pre-calculated values that depend on few other defined providers.

Moreover, you are able to override default implementations, e.g. use different classes or make use of various test
doubles (for testing purposes) when needed.

One essential thing that you should always keep in mind is that Ts.ED uses @@TokenProvider@@ to identify a dependency.

Usually, the auto-generated tokens are equal to classes. If you want to create a custom provider, you'd need to choose a
token.
Mostly, the custom tokens are represented by either plain strings or symbols.

Let's go through the available options.

Custom providers can also use [hooks](/docs/hooks.md) to handle Ts.ED lifecycle events.

For example:

```typescript
import {Injectable} from "@tsed/di";

@Injectable()
class CustomProvider {
  async $onInit() {
    // Initialize your custom provider
  }
}
```

> There is other hooks available like `$onDestroy`, `$afterRoutesInit`, `$beforeRoutesInit`, `$onReady`, see more [here](/docs/hooks.md).

## Register Value

The `.value()` syntax is useful when it comes to either defining a constant value, putting an external library into the DI container,
or replacing a real implementation with the mock object.

```ts \[Legacy]
import {registerProvider} from "@tsed/di";
import {connection} from "connection-lib";

export const CONNECTION = Symbol.for("CONNECTION");

registerProvider({
  provide: CONNECTION,
  useValue: connection,
  hooks: {
    $onDestroy(connection: any) {
      return connection.close();
    }
  }
});

```

In order to inject custom provider, we use the @@Inject@@ decorator. This decorator takes a single argument - the token.

```ts \[Functional API]
import {inject, injectable} from "@tsed/di";
import {CONNECTION} from "./connection.js";

export class MyService {
  private readonly connection = inject(CONNECTION);

  async getData() {
    // Demonstrate typical usage of the injected connection
    return this.connection.query("SELECT * FROM example");
  }
}

injectable(MyService);

```

::: warning
When you declare a provider using a Symbol as a token, you must use the same Symbol to @@Inject@@ decorator.
TypeScript set Object as metadata key for the Symbol token.

```typescript
// Define the symbol once and export it
export const MY_SERVICE = Symbol.for("MY_SERVICE");

// Correct usage
@Injectable()
class MyService {
  @Inject(MY_SERVICE)
  service: MyServiceType;
}

// Incorrect usage - creates a new Symbol
@Injectable()
class MyService {
  @Inject()
  service: MyServiceType;
}
```

:::

## Register Factory

The `.factory()` is a way of creating providers dynamically.
The actual provider will be equal to a returned value of the factory function.
The factory function can either depend on several different providers or stay completely independent.
It means that factory may accept arguments, that DI will resolve and pass during the instantiation process.

```ts \[Legacy]
import {Configuration, registerProvider} from "@tsed/di";
import {DatabaseConnection} from "connection-lib";

export const CONNECTION = Symbol.for("CONNECTION");

registerProvider<DatabaseConnection>({
  provide: CONNECTION,
  deps: [Configuration],
  useFactory(configuration: Configuration) {
    const options = configuration.get<any>("myOptions");

    return new DatabaseConnection(options);
  },
  hooks: {
    $onDestroy(connection) {
      return connection.close();
    }
  }
});

```

In order to inject a custom provider, we use the @@Inject@@ decorator. This decorator takes a single argument - the
token.

```ts \[Functional API]
import {inject, injectable} from "@tsed/di";
import {CONNECTION} from "./connection.js";

export class MyService {
  private readonly connection = inject(CONNECTION);

  async getData() {
    // Demonstrate typical usage of the injected connection
    return this.connection.query("SELECT * FROM example");
  }
}

injectable(MyService);

```

## Register Async Factory

The `.asyncFactory()` is a way of creating asynchronous providers dynamically.
The actual provider will be equal to a returned value of the factory function.
The factory function can either depend on several different providers or stay completely independent.
It means that factory may accept arguments, that DI will resolve and pass during the instantiation process.

```ts \[Legacy]
import {Configuration, registerProvider} from "@tsed/di";
import {DatabaseConnection} from "connection-lib";

export const CONNECTION = Symbol.for("CONNECTION");

registerProvider({
  provide: CONNECTION,
  deps: [Configuration],
  async useAsyncFactory(settings: Configuration) {
    const options = settings.get("myOptions");
    const connection = new DatabaseConnection(options);

    await connection.connect();

    return connection;
  }
});

```

In order to inject a custom provider, we use the @@Inject@@ decorator. This decorator takes a single argument - the
token.

```ts \[Functional API]
import {inject, injectable} from "@tsed/di";
import {CONNECTION} from "./connection.js";

export class MyService {
  private readonly connection = inject(CONNECTION);

  async getData() {
    // Demonstrate typical usage of the injected connection
    return this.connection.query("SELECT * FROM example");
  }
}

injectable(MyService);

```

::: danger Important Scope Limitation
Because async factories are resolved on server loading, the scope of the provider created by useAsyncFactory will always
be considered as `SINGLETON`.

This means:

* The provider will be instantiated only once
* The same instance will be shared across all injections
* Request-scoped dependencies should not be used in async factories
  :::

## Register Class

The `.class()` syntax is similar to register provider via decorator. But it allows you to use different classes per
chosen factors.
For example, you can change the class depending on the environment profile `production` or `development`.

```ts \[Legacy]
import {EnvTypes} from "@tsed/core";

export interface ConfigService {
  get(key: string): any;
}

export class ProdConfigService implements ConfigService {
  get(key: string) {
    return "VALUE PROD";
  }
}

export class DevConfigService implements ConfigService {
  get(key: string) {
    return "VALUE DEV";
  }
}

registerProvider({
  provide: Symbol.for("ConfigService"),
  deps: [],
  useClass: process.env.NODE_ENV === EnvTypes.PROD ? ProdConfigService : DevConfigService
});

```

In this case, even if any class depends on ConfigService, Ts.ED will inject an instance of the provided class (
`ProdConfigService` or `DevConfigService`) instead.

```ts \[Function API]
import {inject, injectable} from "@tsed/di";
import {ConfigService} from "./ConfigService";

export class MyService {
  constructor() {
    console.log(process.env.NODE_ENV, inject(ConfigService)); // DevConfigService or ConfigService
  }
}

injectable(MyService);

```

::: tip
@@injectable@@ can be also used to add a provider or override an existing provider (like @@OverrideProvider@@ decorator).
:::
