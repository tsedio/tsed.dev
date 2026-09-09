---
url: /api/di/types/common/services/class-injector-service.md
description: api documentation of InjectorService from @tsed/di
---

## Usage

```typescript
import { InjectorService } from "@tsed/di";
```

> See [/packages/di/src/common/services/InjectorService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/services/InjectorService.ts#L0-L0).

## Overview

```ts
class InjectorService {
    logger: DILogger;
    settings: DIConfiguration;
    constructor();
    get providers(): Pick<Container, "get" | "has" | "getMany">;
    isLoaded(): boolean;
    add(token: TokenProvider, settings?: Partial<ProviderOpts>): this;
    addProvider(token: TokenProvider, settings?: Partial<ProviderOpts>): this;
    setProvider(token: TokenProvider, provider: Provider): this;
    getProvider<T extends Provider = Provider>(token: TokenProvider | undefined): T | undefined;
    getProviders(type?: TokenProvider | ProviderType | string | string[]): Provider[];
    toArray(): any[];
    get<T = any>(token: TokenProvider<T>, options?: Partial<InvokeOptions>): T;
    getMany<Type = any>(type: any, options?: Partial<InvokeOptions>): Type[];
    has(token: TokenProvider): boolean;
    alias(token: TokenProvider, alias: TokenProvider): this;
    resolve<Type = any>(token: TokenProvider<Type>, options?: Partial<InvokeOptions>): Type;
    invoke<Type = any>(token: TokenProvider<Type>, options?: Partial<InvokeOptions>): Type;
    loadAsync(): Promise<void>;
    loadSync(): void;
    load(container?: Container): Promise<void>;
    resolveConfiguration(): Promise<void>;
    emit(eventName: string, ...args: unknown[]): Promise<void>;
    alter<T = any>(eventName: string, value: any, ...args: any[]): T;
    alterAsync<T = any>(eventName: string, value: any, ...args: any[]): Promise<T>;
    destroy(): Promise<void>;
    protected bootstrap(container?: Container): Promise<this>;
    protected ensureProvider(token: TokenProvider, force: true): Provider;
    protected ensureProvider(token: TokenProvider, force: false): Provider | undefined;
    protected ensureProvider(token: TokenProvider): Provider | undefined;
    protected invokeToken<T>(target: TokenProvider, options?: Partial<InvokeOptions>): T | Promise<T>;
    
    
    
}
```

## Description

Core dependency injection orchestrator managing provider lifecycle and resolution.

The main service responsible for registering, resolving, and managing all injectable providers.
Handles dependency graph resolution, instance caching, scope management, and lifecycle hooks.

### Usage

```typescript
import {InjectorService} from "@tsed/di";

// Import the services (all services are decorated with @Service())
import MyService1 from "./services/service1.js";
import MyService2 from "./services/service2.js";
import MyService3 from "./services/service3.js";

// When all services are imported, you can load InjectorService
await injector().load();

const myService1 = injector.get<MyService1>(MyService1);
```

## logger

```ts
logger: DILogger;
```

## settings

```ts
settings: DIConfiguration;
```

## get providers

```ts
get providers(): Pick<Container, "get" | "has" | "getMany">;
```

## isLoaded

```ts
isLoaded(): boolean;
```

## add

```ts
add(token: TokenProvider, settings?: Partial<ProviderOpts>): this;
```

## addProvider

```ts
addProvider(token: TokenProvider, settings?: Partial<ProviderOpts>): this;
```

## setProvider

```ts
setProvider(token: TokenProvider, provider: Provider): this;
```

## getProvider

```ts
getProvider<T extends Provider = Provider>(token: TokenProvider | undefined): T | undefined;
```

Get a provider definition from the provider registry.

Unlike `get()`, this method does not resolve the provider instance.

## getProviders

```ts
getProviders(type?: TokenProvider | ProviderType | string | string[]): Provider[];
```

Get provider definitions matching a type.

Unlike `getMany()`, this method does not resolve provider instances.

## toArray

```ts
toArray(): any[];
```

Return a list of all instances built by the injector.

## get

```ts
get<T = any>(token: TokenProvider<T>, options?: Partial<InvokeOptions>): T;
```

* **token** (`TokenProvider<T>`): The class or symbol registered in InjectorService

* **options** (`Partial<InvokeOptions>`): Optional. invocation options

Get a service or factory already constructed from its symbol or class.

Returns the cached instance if available, otherwise resolves and caches the provider.

### Usage

```typescript
import {InjectorService} from "@tsed/di";
import MyService from "./services.js";

class OtherService {
  constructor(injectorService: InjectorService) {
    const myService = injectorService.get<MyService>(MyService);
  }
}
```

## getMany

```ts
getMany<Type = any>(type: any, options?: Partial<InvokeOptions>): Type[];
```

* **type** (`any`): The provider type to filter by (e.g., ProviderType.CONTROLLER)

* **options** (`Partial<InvokeOptions>`): Optional. invocation options

Return all instances of providers matching the specified type.

Retrieves all providers of a given type and resolves their instances.

## has

```ts
has(token: TokenProvider): boolean;
```

* **token** (`TokenProvider`): The token to check for

Check if a provider instance exists in the cache.

## alias

```ts
alias(token: TokenProvider, alias: TokenProvider): this;
```

* **token** (`TokenProvider`): The original provider token

* **alias** (`TokenProvider`): The alias token to register

Create an alias for a provider token.

Allows the same provider instance to be retrieved using a different token.

## resolve

```ts
resolve<Type = any>(token: TokenProvider<Type>, options?: Partial<InvokeOptions>): Type;
```

* **token** (`TokenProvider<Type>`): The injectable class to invoke. Constructor parameters are injected automatically

* **options** (`Partial<InvokeOptions>`): Optional. invocation options (locals, rebuild, useOpts, etc.)

Resolve a provider token and return its instance.

If the token isn't cached, the injector creates the instance according to the provider configuration
and caches it based on the provider's scope (singleton, request, or instance).

### Usage

```typescript
import {InjectorService} from "@tsed/di";
import MyService from "./services.js";

class OtherService {
  constructor(injectorService: InjectorService) {
    const myService = injectorService.resolve<MyService>(MyService);
  }
}
```

## invoke

```ts
invoke<Type = any>(token: TokenProvider<Type>, options?: Partial<InvokeOptions>): Type;
```

* **token** (`TokenProvider<Type>`): The injectable class to invoke. Constructor parameters are injected automatically

* **options** (`Partial<InvokeOptions>`): Optional. invocation options (locals, rebuild, useOpts, etc.)

Invoke a provider token and return its instance.

Alias for `resolve()`. If the token isn't cached, the injector creates the instance
according to the provider configuration.

### Usage

```typescript
import {InjectorService} from "@tsed/di";
import MyService from "./services.js";

class OtherService {
  constructor(injectorService: InjectorService) {
    const myService = injectorService.invoke<MyService>(MyService);
  }
}
```

## loadAsync

```ts
loadAsync(): Promise<void>;
```

Build all asynchronous providers.

Resolves providers that have async factories or async initialization.
Called automatically during the `load()` process.

## loadSync

```ts
loadSync(): void;
```

Build all synchronous singleton providers.

Instantiates all singleton-scoped providers that haven't been cached yet.
Called automatically during the `load()` process after async providers.

## load

```ts
load(container?: Container): Promise<void>;
```

* **container** (`Container`): Optional. container with additional providers to merge

Load and initialize all registered providers.

Bootstraps the DI system by resolving configuration, building provider instances,
and triggering lifecycle hooks (`$beforeInit`, `$onInit`).

### Usage

```typescript
import {injector} from "@tsed/di";

await injector().load();
```

## resolveConfiguration

```ts
resolveConfiguration(): Promise<void>;
```

Resolve and merge all provider configurations.

Collects configuration from all providers decorated with `@Configuration`,
merges them, and stores the result in the injector settings.
Called automatically during the load process.

## emit

```ts
emit(eventName: string, ...args: unknown[]): Promise<void>;
```

* **eventName** (`string`): The event name to emit at all services.

* **args** (`unknown[]`): List of the parameters to give to each service.

Emit an event to all service. See service [lifecycle hooks](/docs/hooks.md#lifecycle-hooks).

## alter

```ts
alter<T = any>(eventName: string, value: any, ...args: any[]): T;
```

Alter value attached to an event.

## alterAsync

```ts
alterAsync<T = any>(eventName: string, value: any, ...args: any[]): Promise<T>;
```

Alter value attached to an event asynchronously.

## destroy

```ts
destroy(): Promise<void>;
```

Destroy the injector and all services.

## protected bootstrap

```ts
protected bootstrap(container?: Container): Promise<this>;
```

Bootstrap injector from container, resolve configuration and providers.

## protected ensureProvider

```ts
protected ensureProvider(token: TokenProvider, force: true): Provider;
```

Ensure that a provider is added to the container.

## protected ensureProvider

```ts
protected ensureProvider(token: TokenProvider, force: false): Provider | undefined;
```

## protected ensureProvider

```ts
protected ensureProvider(token: TokenProvider): Provider | undefined;
```

## protected invokeToken

```ts
protected invokeToken<T>(target: TokenProvider, options?: Partial<InvokeOptions>): T | Promise<T>;
```

Invoke a class method and inject service.

#### IInjectableMethod options

* **target**: Optional. The class instance.
* **methodName**: `string` Optional. The method name.
* **designParamTypes**: `any[]` Optional. List of injectable types.
* **locals**: `Map<Function, any>` Optional. If preset then any argument Class are read from this object first, before the `InjectorService` is consulted.

#### Example
