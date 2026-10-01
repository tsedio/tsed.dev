---
url: /docs/providers.md
description: Discover Ts.ED Providers / DI.
---

# DI & Providers

Basically, almost everything may be considered as a provider – service, factory, interceptors, and so on. All of them
can inject dependencies, meaning, they can create various relationships with each other. But in fact, a provider is
nothing else than just a simple class annotated with an @@Injectable@@ decorator.

![Providers](./assets/providers.png)

In controller chapters, we've seen how to build a Controller, handle a request and create a response. Controllers shall
handle HTTP requests and delegate complex tasks to the **providers**.

Providers are plain JavaScript classes and use one of these decorators on top of them. Here is the list:

::: tip
Since v8, you can also use the functional API to define your providers using the @@injectable@@ function. This function
lets you define your provider without using decorators and lets you define your provider in a more functional way.

This page will show you how to use both syntaxes to define your providers.

:::

## Injectable

Let's start by creating a simple CalendarService provider.

::: code-group

```ts \[Functional API]
import {injectable} from "@tsed/di";
import {Calendar} from "../models/Calendar.js";

export class CalendarService {
  private readonly calendars: Calendar[] = [];

  create(calendar: Calendar) {
    this.calendars.push(calendar);
  }

  findAll(): Calendar[] {
    return this.calendars;
  }
}

injectable(CalendarsService);

```

:::

> @@Service@@ and @@Injectable@@ have the same effect. @@Injectable@@ accepts options, @@Service@@ does not.
> A Service is always configured as `singleton`.

Example with @@Injectable@@:

::: code-group

```ts \[Functional API]
import {ProviderScope, ProviderType} from "@tsed/di";
import {Calendar} from "../models/Calendar.js";

export class CalendarsService {
  private readonly calendars: Calendar[] = [];

  create(calendar: Calendar) {
    this.calendars.push(calendar);
  }

  findAll(): Calendar[] {
    return this.calendars;
  }
}

injectable(CalendarsService).type(ProviderType.SERVICE).scope(ProviderScope.SINGLETON);

```

:::

Now we have the service class already done, let's use it inside the `CalendarsController`:

::: code-group

```ts \[Test]
import {PlatformTest} from "@tsed/platform-http/testing";
import {Calendar} from "../models/Calendar.js";
import {CalendarsService} from "../services/CalendarsService.js";

async function getFixture() {
  const service = {
    findAll: vi.fn().mockResolvedValue([]),
    create: vi.fn().mockImplementation((calendar: Calendar) => {
      calendar.id = "id";
      return calendar;
    })
  };
  const controller = await PlatformTest.invoke<CalendarsController>(CalendarsController, [
    {
      token: CalendarsService,
      use: service
    }
  ]);

  return {
    service,
    controller
  };
}

describe("CalendarsController", () => {
  beforeEach(() => PlatformTest.create());
  afterEach(() => PlatformTest.reset());

  describe("findAll()", () => {
    it("should return calendars from the service", async () => {
      const {controller, service} = await getFixture();

      const result = await controller.findAll();

      expect(result).toEqual([]);
      expect(service.findAll).toHaveBeenCalledWith();
    });
  });

  describe("create()", () => {
    it("should create using the service", async () => {
      const {controller, service} = await getFixture();

      const calendar = new Calendar();

      const result = await controller.create(calendar);

      expect(result.id).toEqual(id);
      expect(service.create).toHaveBeenCalledWith(calendar);
    });
  });
});

```

> Functional API doesn't provides alternative for @@Get@@ and @@BodyParams@@ decorators at the moment.

Finally, we can load the injector and use it:

::: code-group

```ts \[Functional API]
import {configuration} from "@tsed/di";
import {CalendarsController} from "./controllers/CalendarsController.js";

export class Server {}

configuration(Server, {
  mount: {
    "/rest": [CalendarsController]
  }
});

```

:::

::: tip NOTE

You'll notice that we only import the CalendarsController and not the CalendarsService as that would be the case
with other DIs (Angular / inversify). Ts.ED will discover automatically services/providers as soon as it's imported
into your application via an import ES6.

In most case, if a service is used by a controller or another service which is used by a controller, it's not necessary
to import it explicitly!
:::

## Dependency injection

Ts.ED is built around the **dependency injection** pattern. TypeScript emits type metadata on the constructor which will
be exploited by the @@InjectorService@@ to resolve dependencies automatically.

::: code-group

```typescript [Descorators]
import {Injectable} from "@tsed/di";

@Injectable()
class MyInjectable {
  @Inject()
  private calendarsService: CalendarsService;

  // or through the constructor
  constructor(private calendarsService2: CalendarsService) {
    console.log(calendarsService);
    console.log(calendarsService2);
    console.log(calendarsService === calendarsService2); // true
  }
}
```

```typescript [Functional API]
import {Injectable} from "@tsed/di";

@Injectable()
class MyInjectable {
  private calendarsService = inject(CalendarsService);

  constructor() {
    const calendarsService2 = inject(CalendarsService);
    console.log(calendarsService);
    console.log(calendarsService2);
    console.log(calendarsService === calendarsService2); // true
  }
}
```

:::

::: warning Important
With v7, accessing to a property decorated with @@Inject()@@, @@Constant@@, @@Value@@ in the constructor is not
possible. You have to use the
`$onInit()` hook to access to the injected service.

```typescript
import {Injectable, Inject} from "@tsed/di";

@Injectable()
class MyInjectable {
  @Inject()
  private calendarsService: CalendarService;

  $onInit() {
    console.log(this.calendarsService);
  }
}
```

The v8 solve that, and now, you can access to the injected
service in the constructor.
:::

Note that, the @@inject@@ function can be used anywhere in your code, not only in a DI context:

```typescript
function getCalendarsService(): CalendarsService {
  const calendarsService = inject(CalendarsService);
  console.log(calendarsService);

  // do something

  return calendarsService;
}
```

## Scopes

All providers have a lifetime strictly dependent on the application lifecycle. Once the server is created, all providers
have to be instantiated. Similarly, when the application shuts down, all providers will be destroyed. However, there are
ways to make your provider lifetime **request-scoped** as well. You can read more about these
techniques [here](/docs/injection-scopes.md).

## Binding configuration

All configurations set with @@Module@@ or @@Configuration@@ can be retrieved with @@Constant@@ and @@Value@@ decorators,
or
with @@configuration@@, @@constant@@, and @@refValue@@ functions. It supports lodash path to retrieve nested properties.

By using these decorators or functions, you can more easily decouple your code from your server configurations and
therefore
more easily test your code independently of environment variables managed by files (.env, nconf, etc.).

Instead of doing this:

```ts
import {Injectable} from "@tsed/di";

@Injectable()
class MyService {
  doSomething() {
    const value = process.env.MY_VALUE;

    // your code
  }
}
```

Do this:

```ts \[Functional API]
class MyService {
  private value = constant<string>("envs.MY_VALUE");

  doSomething() {
    console.log(this.value);
    // your code
  }
}

injectable(MyService);

// server.ts
configuration(Server, {
  envs: {
    MY_VALUE: process.env.MY_VALUE || "myValue"
  }
});

```

Then, you can test your code like this:

```ts
import {PlatformTest} from "@tsed/platform-http/testing";
import {inject} from "@tsed/di";
import {MyService} from "./MyService.js";

describe("MyService", () => {
  describe("when MY_VALUE is given", () => {
    beforeEach(() =>
      PlatformTest.create({
        envs: {
          MY_VALUE: "myValue"
        }
      })
    );
    afterEach(() => PlatformTest.reset());

    it("should do something", () => {
      const myService = inject(MyService);

      expect(myService.doSomething()).toBe("myValue");
    });
  });

  describe("when MY_VALUE IS undefined", () => {
    beforeEach(() => PlatformTest.create());
    afterEach(() => PlatformTest.reset());

    it("should do something", () => {
      const myService = inject(MyService);

      expect(myService.doSomething()).toBe("myValue");
    });
  });
});
```

Testing different configurations is now much easier.

### Constant

The @@Constant@@ decorator or @@constant@@ function is used to inject a constant value into a provider.

```ts \[Functional API]
import {Env} from "@tsed/core";
import {constant} from "@tsed/di";

export class MyClass {
  private readonly env = constant<Env>(Env);

  constructor() {
    console.log(this.env);
  }
}

injectable(MyClass);

// server.ts
import {configuration} from "@tsed/di";

class Server {}

configuration(Server, {
  env: process.env.NODE_ENV
});

```

::: warning
@@Constant@@ returns an immutable value using `Object.freeze()`. If you need to inject a mutable value, use @@Value@@
instead.
:::

Note that, @@constant@@ function can be used anywhere in your code, not only in a DI context:

```ts
function getMyValue(): string {
  const value = constant<string>("MY_VALUE");
  console.log(value); // "myValue"

  // do something

  return value;
}

@Injectable()
class MyService {
  constructor() {
    const value = getMyValue();
    console.log(value); // "myValue"
  }
}

// server.ts
import {configuration} from "@tsed/di";

class Server {}

configuration(Server, {
  MY_VALUE: "myValue"
});
```

Default value can be set with the second argument of the @@Constant@@ / @@constant@@:

```ts
@Constant("MY_VALUE", "defaultValue")
```

```ts
constant("MY_VALUE", "defaultValue");
```

::: tip Note
@@constant@@ try to infer the type from the default value. But sometimes, TypeScript will infer the unexpected type if
you give
a `null` value. In this case, you can specify the type explicitly:

```ts
constant<string | null>("MY_VALUE", null);
```

:::

### Value/refValue

The @@Value@@ decorator or @@refValue@@ function is used to inject a mutable value into a provider.

```ts \[Functional API]
import {refValue, injectable} from "@tsed/di";

export class MyClass {
  private myValue = refValue<string>("path.to.value");

  constructor() {
    console.log(this.myValue.value);

    this.myValue.value = "newValue";
  }
}

injectable(MyClass);

// server.ts
import {configuration} from "@tsed/di";

class Server {}

configuration(Server, {
  path: {to: {value: "myValue"}}
});

```

Note that, @@refValue@@ function can be used anywhere in your code, not only in a DI context:

```ts
function getMyValue(): string {
  const value = value<string>("MY_VALUE");
  console.log(value); // "myValue"

  // do something

  return value;
}

// or
const current = getMyValue();
console.log(current.value);

// or
@Injectable()
class MyService {
  constructor() {
    const current = getMyValue();
    console.log(current.value); // "myValue"
  }
}
```

## Custom providers

The Ts.ED IoC resolves relationships providers for you, but sometimes, you want to tell to the DI how you want to
instantiate a specific service or inject different kind of providers based on values, on asynchronous or synchronous
factory or on external library. Look [here](/docs/custom-providers.md) to find more examples.

## Configurable provider

Sometimes you need to inject a provider with a specific configuration to another one.

This is possible with the combination of @@Opts@@ and @@UseOpts@@ decorators.

```ts
import {Injectable, Opts, UseOpts} from "@tsed/di";

@Injectable()
class MyConfigurableService {
  source: string;

  constructor(@Opts options: any = {}) {
    console.log("Hello ", options.source); // log: Hello Service1 then Hello Service2

    this.source = options.source;
  }
}

@Injectable()
class MyService1 {
  constructor(@UseOpts({source: "Service1"}) service: MyConfigurableService) {
    console.log(service.source); // log: Service1
  }
}

@Injectable()
class MyService2 {
  constructor(@UseOpts({source: "Service2"}) service: MyConfigurableService) {
    console.log(service.source); // log: Service2
  }
}

```

::: warning

Using @@Opts@@ decorator on a constructor parameter changes the scope of the provider
to `ProviderScope.INSTANCE`.
:::

## Inject many providers

This feature simplifies dependency management when working with multiple implementations of the same interface using
type code.

Using a token, you can configure an injectable class to be resolved as an array of instances using the `type` option:

```ts \[Functional API]
import {injectable} from "@tsed/di";

export interface Bar {
  type: string;
}

export const Bar: unique symbol = Symbol("Bar");

class Foo implements Bar {
  private readonly name = "foo";
}

class Baz implements Bar {
  private readonly type = "baz";
}

injectable(Foo).type(Bar);
injectable(Baz).type(Bar);

```

Now, we can use the `Bar` token to inject all instances of `Bar` identified by his `type`:

```ts \[Functional API]
import {controller, injectMany} from "@tsed/di";
import {BodyParams} from "@tsed/platform-params";
import {Post} from "@tsed/schema";
import {Bar} from "./Bar.js";

export class SomeController {
  private readonly bars = injectMany<Bar>(Bar);

  @Post()
  async create(@BodyParams("type") type: "baz" | "foo") {
    const bar: Bar | undefined = this.bars.find((x) => x.type === type);
  }
}

controller(SomeController).path("/");

```

Alternatively, you can do this:

```ts
import {Controller, injectMany} from "@tsed/di";
import {Post} from "@tsed/schema";
import {BodyParams} from "@tsed/platform-params";

@Controller("/some")
export class SomeController {
  @Post()
  async create(@BodyParams("type") type: "baz" | "foo") {
    const bar = injectMany<Bar>(Bar).find((x) => x.type === type);
  }
}
```

### AutoInjectable&#x20;

The @@AutoInjectable@@ decorator let you create a class using `new` that will automatically inject all dependencies from
his
constructor signature.

```ts
import {AutoInjectable} from "@tsed/di";
import {MyOtherService} from "./MyOtherService.js";

@AutoInjectable()
class MyService {
  constructor(
    opts: MyOptions,
    private myOtherService?: MyOtherService
  ) {
    console.log(myOtherService);
    console.log(opts);
  }
}

const myService = new MyService({
  prop: "value"
});
```

In this example, we can see that `MyService` is created using `new`. We can give some options to the constructor and the
rest of
the dependencies will be injected automatically.

::: warning
@@AutoInjectable@@ decorator only handles dependency injection when using `new`. It doesn't register the class as a
provider in the DI container. If you need the class to be available for injection in other classes, you must still use
@@Injectable@@.
:::

## Interface abstraction

In some cases, you may want to use an interface to abstract the implementation of a service. This is a common pattern in
TypeScript and can be achieved by using the `provide` option in the `@Injectable` decorator or the
`injectable().class()` function.

```ts \[Functional API]
export interface RetryPolicy {
  retry<T extends (...args: unknown[]) => unknown>(task: T): Promise<ReturnType<T>>;
}

export const RetryPolicy: unique symbol = Symbol("RetryPolicy");

class TokenBucket implements RetryPolicy {
  public retry<T extends (...args: unknown[]) => unknown>(task: T): Promise<ReturnType<T>> {
    // ...
  }
}

injectable(RetryPolicy).class(TokenBucket);

```

Usage:

```ts \[Functional API]
import {inject, injectable} from "@tsed/di";
import {RetryPolicy} from "./RetryPolicy.js";

export class MyService {
  private readonly retryPolicy = inject(RetryPolicy);
}

injectable(MyService);

```

## Define provider by environment&#x20;

Sometimes you need to import a provider depending on the environment or depending on a runtime context.

This is possible using the DI configuration `imports` option that let you fine-tune the provider registration.

Here is an example of how to import a provider from a configuration:

```ts
import {Configuration} from "@tsed/di";

const TimeslotsRepository = Symbol.for("TimeslotsRepository");

interface TimeslotsRepository {
  findTimeslots(): Promise<any[]>;
}

class DevTimeslotsRepository implements TimeslotsRepository {
  findTimeslots(): Promise<any[]> {
    return ["hello dev"];
  }
}

class ProdTimeslotsRepository implements TimeslotsRepository {
  findTimeslots(): Promise<any[]> {
    return ["hello prod"];
  }
}

@Configuration({
  imports: [
    {
      token: TimeslotsRepository,
      useClass: process.env.NODE_ENV === "production" ? ProdTimeslotsRepository : DevTimeslotsRepository
    }
  ]
})
export class Server {}

```

You can also use @@injectable@@ function to define your provider by environment:

```ts
import {injectable} from "@tsed/di";
import {Env} from "@tsed/core";

export interface TimeslotsRepository {
  findTimeslots(): Promise<any[]>;
}

class DevTimeslotsRepository implements TimeslotsRepository {
  findTimeslots(): Promise<any[]> {
    return ["hello dev"];
  }
}

class ProdTimeslotsRepository implements TimeslotsRepository {
  findTimeslots(): Promise<any[]> {
    return ["hello prod"];
  }
}

export const TimeslotsRepository = injectable(Symbol.for("TimeslotsRepository"))
  .class(process.env.NODE_ENV === Env.PROD ? ProdTimeslotsRepository : DevTimeslotsRepository)
  .token();

```

## Lazy load provider

By default, modules are eagerly loaded, which means that as soon as the application loads, so do all the modules,
whether or not they are immediately necessary. While this is fine for most applications,
it may become a bottleneck for apps running in the **serverless environment**, where the startup latency
`("cold start")` is crucial.

Lazy loading can help decrease bootstrap time by loading only modules required by the specific serverless function
invocation.
Additionally, you can load other modules asynchronously once the serverless function is "warm" to speed up the
bootstrap time for subsequent calls (deferred module registration).

You can read more about these techniques [here](/docs/providers-lazy-loading.md).

## Override provider

Any provider (Provider, Service, Controller, Middleware, etc...) already registered by Ts.ED or third-party can be
overridden by your own class.

To override an existing provider, you can reuse the token to register your own provider
using @@Injectable@@, @@OverrideProvider@@ decorators or @@injectable@@ function:

```ts \[Functional API]
import {injectable} from "@tsed/di";
import {PlatformCache} from "@tsed/platform-cache";

class CustomCache extends PlatformCache {
  /// do something
}

injectable(PlatformCache).class(CustomCache);

// server.ts
import "./services/CustomCache.js";

export class Server {}

configuration(Server, {});

```

> Just don't forget to import your provider in your project !

## Inject context

The @@Context@@ decorator or @@context@@ function is used to inject the request context into a class or another
function.

Context is a special object that contains all the information about the current request.
It can be available in any injectable context, including controllers, services, and interceptors, while the request is
being processed.

Here is an example to get context:

```ts \[Functional API]
import {context, controller, injectable} from "@tsed/di";
import {PlatformContext} from "@tsed/platform-http";
import {PathParams} from "@tsed/platform-params";
import {Get} from "@tsed/schema";

export class CustomRepository {
  async findById(id: string) {
    const $ctx = context<PlatformContext>();
    $ctx?.logger.info("Where are in the repository");

    return {
      id,
      headers: $ctx?.request.headers
    };
  }
}

injectable(CustomRepository);

export class AsyncHookCtrl {
  private readonly repository = inject(CustomRepository);

  @Get("/:id")
  async get(@PathParams("id") id: string) {
    return this.repository.findById(id);
  }
}

controller(AsyncHookCtrl).path("/async-hooks");

```

See more about the context [here](/docs/request-context.md).

## Get injector

v8 allows you to get the injector instance everywhere in your code:

```typescript
import {injector} from "@tsed/di";

function doSomething() {
  const myService = injector().get<MyService>(MyService);
  // shortcut to inject(MyService)

  return myService.doSomething();
}
```

## Extending DIConfiguration

The `DIConfiguration` class provides a `decorate` method that allows you to extend its functionality by adding new
methods or properties. You can access this method through the `configuration()` function.

```typescript
import {configuration} from "@tsed/di";

// Add a custom method to DIConfiguration
configuration().decorate("myCustomMethod", function () {
  // Your custom logic here
  return "Custom result";
});

// Usage
const result = configuration().myCustomMethod(); // "Custom result"
```

You can also add a property with a custom getter/setter:

```typescript
configuration().decorate("customProperty", {
  get() {
    return this.get("someInternalValue");
  },
  set(value) {
    this.set("someInternalValue", value);
  }
});
```

This is particularly useful for plugin authors who want to extend the configuration capabilities without modifying the
core code. For example, you could add methods to handle specific configuration patterns for your plugin:

```typescript
// In your plugin's initialization code
configuration().decorate("myPlugin", function (options) {
  // Set up plugin-specific configuration
  this.set("myPlugin", {
    enabled: options.enabled ?? true,
    timeout: options.timeout ?? 5000
    // other plugin options
  });

  return this;
});

// Usage in application code
configuration().myPlugin({
  enabled: true,
  timeout: 10000
});
```

## Using the $alterConfig:propertyKey Hook

The `$alterConfig:propertyKey` hook allows you to intercept and modify configuration values before they are assigned to
a property. This is useful when you need to transform, validate, or augment configuration values dynamically.

When a value is set in the configuration using the `set()` method, the DIConfiguration class internally calls the
`$alter` hook with the pattern `$alterConfig:${propertyKey}`, passing the value as the second argument.

Here's how to use this hook:

```typescript
import {$on} from "@tsed/hooks";

// Register a hook to intercept and modify the 'jsonMapper' configuration
$on("$alterConfig:jsonMapper", (options) => {
  // Modify the options before they are assigned
  options.strictGroups = Boolean(options.strictGroups);
  options.disableUnsecureConstructor = Boolean(options.disableUnsecureConstructor);
  options.additionalProperties = Boolean(
    isBoolean(options.additionalProperties) ? options.additionalProperties : options.additionalProperties === "accept"
  );

  // Return the modified options
  return options;
});
```

This hook is particularly useful for:

* Normalizing configuration values
* Applying default values
* Validating configuration before it's applied
* Transforming configuration formats
* Implementing cross-cutting concerns for configuration properties

The hook is executed whenever the corresponding property is set, whether through direct assignment or through the
`configuration().set()` method.
