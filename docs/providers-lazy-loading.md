---
url: /docs/providers-lazy-loading.md
description: Documentation over Providers / DI provided by Ts.ED framework.
---

# Lazy-loading provider

By default, modules are eagerly loaded, which means that as soon as the application loads, so do all the modules,
whether they are immediately necessary. While this is fine for most applications, it may become a bottleneck for
apps running in the **serverless environment**, where the startup latency `("cold start")` is crucial.

Lazy loading can help decrease bootstrap time by loading only modules required by the specific serverless function
invocation. In addition, you could also load other modules asynchronously once the serverless function is "warm" to
speed up the bootstrap time for subsequent calls even further (deferred modules registration).

## Usage

To load a provider on-demand, Ts.ED provides decorators @@LazyInject@@ and @@OptionalLazyInject@@. Here is an example
with a @@PlatformExceptions@@:

```ts \[Functional API]
import {injectable, lazyInject} from "@tsed/di";

class MyInjectable {
  async use() {
    try {
      /// do something
      // Example: Perform some operation that might fail
      await someAsyncOperation();
    } catch (er) {
      const exceptions = await lazyInject(() => import("@tsed/platform-exceptions"));
      // Handle the error with appropriate options
      exceptions.catch(er, injectContext());
    }
  }
}

injectable(MyInjectable);

```

The LazyInject decorator will load the `node_module` and invoke automatically the `PlatformException` exported class,
only when the decorated property will be used by your code.

::: tip

Lazy-loaded provider is `cached` on the first call.
That means, each consecutive call will be very fast and will return a cached instance, instead of loading the provider again.

:::

Creating your own lazy injectable does not require special configuration, just declare a module or an injectable service with default export:

```ts \[Functional API]
import {injectable} from "@tsed/di";

export default class MyModule {
  private initialized: boolean = false;
  $onInit() {
    // This lifecycle hook is called after the module is loaded
    // and all dependencies are resolved.
    // Example: Initialize module-specific resources
    this.initialized = true;
    console.log("MyModule initialized!");
  }
}

injectable(MyModule).configuration({
  imports: [
    // add your services here
    // Example: Import required services
    // AuthService,
    // UserService,
    // {
    //   token: 'CONFIG',
    //   use: {apiUrl: 'https://api.example.com'}
    // }
  ]
});

```

Then use it:

```ts \[Functional API]
import {injectable, lazyInject} from "@tsed/di";

class MyInjectable {
  async use() {
    const myModule = await lazyInject(() => import("./MyModule.js"));

    myModule.doSomething();
  }
}

injectable(MyInjectable);

```

::: warning

If you use Webpack, make sure to update your `tsconfig.json` file - setting `compilerOptions.module` to `"esnext"` and adding `compilerOptions.moduleResolution` property with `"node"` as a value:

```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "node"
  }
}
```

:::

## Limitation

Some providers cannot be lazy loaded:

* Controllers,
* Middlewares,
* All providers that need to run a specific hook (excepted `$onInit` hook).
