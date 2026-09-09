---
url: /api/di/types/common/domain/class-provider.md
description: api documentation of Provider from @tsed/di
---

## Usage

```typescript
import { Provider } from "@tsed/di";
```

> See [/packages/di/src/common/domain/Provider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/Provider.ts#L0-L0).

## Overview

```ts
class Provider<T = any> implements ProviderOpts<T> {
    static readonly Registry: Map<any, Provider<any>>;
    type: ProviderType | TokenProvider;
    deps: TokenProvider[];
    imports: (TokenProvider | [TokenProvider])[];
    alias: string;
    priority: number;
    useFactory?: Function;
    useAsyncFactory?: Function;
    useValue?: unknown;
    hooks: Record<string, ProviderHookCallback<T>>;
    tokenRouter: string;
    [key: string]: any;
    constructor(token: TokenProvider<T>, options?: Partial<Provider>);
    get token(): TokenProvider;
    set token(value: TokenProvider);
    get provide(): TokenProvider;
    set provide(value: TokenProvider);
    get useClass(): Type<T>;
    set useClass(value: Type<T> | AbstractType<T>);
    get className(): string;
    get name(): string;
    get store(): Store;
    get path(): string;
    set path(path: string);
    get scope(): ProviderScope;
    set scope(scope: ProviderScope);
    get configuration(): Partial<TsED.Configuration>;
    set configuration(configuration: Partial<TsED.Configuration>);
    get children(): TokenProvider[];
    set children(children: TokenProvider[]);
    get middlewares(): Partial<ControllerMiddlewares>;
    set middlewares(middlewares: Partial<ControllerMiddlewares>);
    getArgOpts(index: number): any;
    get<Type = unknown>(key: string): Type | undefined;
    get<Type = unknown>(key: string, defaultValue: Type): Type;
    isAsync(): boolean;
    clone(): Provider;
    hasChildren(): boolean;
    hasParent(): boolean;
    toString(): string;
    reset(): this;
}
```

## Description

Provider metadata class managing dependency injection configuration.

Encapsulates all information needed to create, configure, and manage a provider instance
within the DI container. Tracks dependencies, lifecycle hooks, creation strategies, and metadata.

### Usage

```typescript
import {Provider, ProviderType} from "@tsed/di";

const provider = new Provider(MyService);
provider.type = ProviderType.PROVIDER;
provider.deps = [DatabaseService, LoggerService];
```

## Constructor

```ts
constructor(token: TokenProvider<T>, options?: Partial<Provider>);
```

Creates a new Provider instance

## static readonly Registry

```ts
static readonly Registry: Map<any, Provider<any>>;
```

Global registry for storing all providers in the dependency injection system.
Maps provider tokens to their Provider instances.

## type

```ts
type: ProviderType | TokenProvider;
```

Token group provider to retrieve all providers from the same type

## deps

```ts
deps: TokenProvider[];
```

Array of token providers that this provider depends on

## imports:

```ts
imports: (TokenProvider | [TokenProvider])[];
```

Array of providers or provider arrays to be imported

## alias

```ts
alias: string;
```

Alternative name/alias for this provider

## priority

```ts
priority: number;
```

Priority value affecting the order of provider initialization

## useFactory

```ts
useFactory?: Function;
```

Optional factory function to create provider instances

## useAsyncFactory

```ts
useAsyncFactory?: Function;
```

Optional async factory function to create provider instances

## useValue

```ts
useValue?: unknown;
```

Optional static value to use instead of creating instances

## hooks

```ts
hooks: Record<string, ProviderHookCallback<T>>;
```

Map of lifecycle hook callbacks for this provider

## tokenRouter

```ts
tokenRouter: string;
```

Router token for routing-related providers

## \[key: string]

```ts
[key: string]: any;
```

## get token

```ts
get token(): TokenProvider;
```

Get the provider's token

## set token

```ts
set token(value: TokenProvider);
```

Set the provider's token and initialize stores

## get provide

```ts
get provide(): TokenProvider;
```

## set provide

```ts
set provide(value: TokenProvider);
```

## get useClass

```ts
get useClass(): Type<T>;
```

Gets the class type used to instantiate this provider

## set useClass

```ts
set useClass(value: Type<T> | AbstractType<T>);
```

Sets the class type and initializes store/hooks for this provider

## get className

```ts
get className(): string;
```

## get name

```ts
get name(): string;
```

## get store

```ts
get store(): Store;
```

## get path

```ts
get path(): string;
```

## set path

```ts
set path(path: string);
```

## get scope

```ts
get scope(): ProviderScope;
```

Get the scope of the provider.

::: tip Note
Async provider is always a SINGLETON
:::

## set scope

```ts
set scope(scope: ProviderScope);
```

Change the scope value of the provider.

## get configuration

```ts
get configuration(): Partial<TsED.Configuration>;
```

Gets the provider configuration settings

## set configuration

```ts
set configuration(configuration: Partial<TsED.Configuration>);
```

Sets the provider configuration settings

## get children

```ts
get children(): TokenProvider[];
```

## set children

```ts
set children(children: TokenProvider[]);
```

## get middlewares

```ts
get middlewares(): Partial<ControllerMiddlewares>;
```

Gets the configured middleware stack for this provider

## set middlewares

```ts
set middlewares(middlewares: Partial<ControllerMiddlewares>);
```

Sets middleware configuration, merging with existing middlewares

## getArgOpts

```ts
getArgOpts(index: number): any;
```

## get

```ts
get<Type = unknown>(key: string): Type | undefined;
```

* **key** (`string`): The key to look up

Retrieves a value from the provider's store.

## get

```ts
get<Type = unknown>(key: string, defaultValue: Type): Type;
```

* **key** (`string`): The key to look up

* **defaultValue** (`Type`): The value to return if key is not found

Retrieves a value from the provider's store with a default fallback.

## isAsync

```ts
isAsync(): boolean;
```

## clone

```ts
clone(): Provider;
```

## hasChildren

```ts
hasChildren(): boolean;
```

Checks if this provider has any child controllers

## hasParent

```ts
hasParent(): boolean;
```

Checks if this provider has a parent controller

## toString

```ts
toString(): string;
```

Returns a string representation of this provider

## reset

```ts
reset(): this;
```

Resets the provider's factory configuration
Clears useValue, useFactory and useAsyncFactory
