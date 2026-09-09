---
title: DIConfiguration from @tsed/di
description: api documentation of DIConfiguration from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation DIConfiguration class
---
# DIConfiguration - @tsed/di

## Usage

```typescript
import { DIConfiguration } from "@tsed/di";
```

> See [/packages/di/src/common/services/DIConfiguration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/services/DIConfiguration.ts#L0-L0).

## Overview

```ts
class DIConfiguration {
    readonly default: Map<string, any>;
    protected map: Map<string, any>;
    constructor(initialProps?: {});
    get version(): string;
    set version(v: string);
    get rootDir(): string;
    set rootDir(value: string);
    get env(): Env;
    set env(value: Env);
    get imports(): (TokenProvider | ImportTokenProviderOpts)[];
    set imports(imports: (TokenProvider | ImportTokenProviderOpts)[]);
    get lazyProviders(): boolean;
    set lazyProviders(lazyProviders: boolean);
    get routes(): TokenRoute[];
    set routes(routes: TokenRoute[]);
    get logger(): Partial<DILoggerOptions>;
    set logger(value: Partial<DILoggerOptions>);
    get debug(): boolean;
    set debug(debug: boolean);
    get mount(): Record<string, TokenProvider[]>;
    set mount(value: Record<string, TokenProvider[]>);
    forEach(callbackfn: (value: any, index: string, map: Map<string, any>) => void, thisArg?: any): void;
    set(obj: Partial<TsED.Configuration>): this;
    set(propertyKey: string, value?: unknown): this;
    setRaw(propertyKey: string, value: any): this;
    get<T = any>(propertyKey: string, defaultValue?: T): T;
    decorate(key: string, value: ((...args: unknown[]) => unknown) | PropertyDescriptor): this | undefined;
    protected getRaw(propertyKey: string, defaultValue?: any): any;
}
```

<!-- Description -->

## Description

Configuration management service for the DI system.

Stores and manages application configuration settings including imports, routes, logger options,
and custom properties. Provides type-safe accessors for common configuration keys and supports
nested property access via `get()` and `set()`.

### Usage

```typescript
import {DIConfiguration} from "@tsed/di";

const config = new DIConfiguration({
  rootDir: __dirname,
  env: Env.PROD,
  logger: {level: "info"}
});

config.set("custom.nested.key", "value");
const value = config.get("custom.nested.key");
```

<!-- Members -->

## Constructor

```ts
constructor(initialProps?: {});
```

Creates a configuration service with the built-in defaults merged with the supplied initial properties.

## readonly default

```ts
readonly default: Map<string, any>;
```

## protected map

```ts
protected map: Map<string, any>;
```

## get version

```ts
get version(): string;
```

Gets the application version.

## set version

```ts
set version(v: string);
```

Sets the application version.

## get rootDir

```ts
get rootDir(): string;
```

Gets the application's root directory.

## set rootDir

```ts
set rootDir(value: string);
```

Sets the application's root directory.

## get env

```ts
get env(): Env;
```

Gets the active runtime environment.

## set env

```ts
set env(value: Env);
```

Sets the active runtime environment.

## get imports

```ts
get imports(): (TokenProvider | ImportTokenProviderOpts)[];
```

Gets the providers and modules imported by the application.

## set imports

```ts
set imports(imports: (TokenProvider | ImportTokenProviderOpts)[]);
```

Sets the providers and modules imported by the application.

## get lazyProviders

```ts
get lazyProviders(): boolean;
```

Indicates whether synchronous singleton providers without hooks are deferred until first use.

## set lazyProviders

```ts
set lazyProviders(lazyProviders: boolean);
```

Enables or disables deferred initialization of synchronous singleton providers without hooks.

## get routes

```ts
get routes(): TokenRoute[];
```

Gets the route providers registered by the application.

## set routes

```ts
set routes(routes: TokenRoute[]);
```

Sets the route providers registered by the application.

## get logger

```ts
get logger(): Partial<DILoggerOptions>;
```

Gets the logger options.

## set logger

```ts
set logger(value: Partial<DILoggerOptions>);
```

Merges logger options into the current logger configuration.

## get debug

```ts
get debug(): boolean;
```

Indicates whether the logger is configured at the `debug` level.

## set debug

```ts
set debug(debug: boolean);
```

Enables or disables debug-level logging.

## get mount

```ts
get mount(): Record<string, TokenProvider[]>;
```

Gets route providers grouped by mount path.

## set mount

```ts
set mount(value: Record<string, TokenProvider[]>);
```

Sets route providers grouped by mount path.

## forEach

```ts
forEach(callbackfn: (value: any, index: string, map: Map<string, any>) => void, thisArg?: any): void;
```

-   **callbackfn** (`(value: any`): Callback invoked with the resolved value, key, and override map.

-   **thisArg** (`any`): Optional. Value to use as `this` when invoking the callback.

Invokes a callback once for each configured key, including default and overridden values.

## set

```ts
set(obj: Partial<TsED.Configuration>): this;
```

-   **propertyKey** (\`\`): Configuration key and value, or an object containing multiple values.

-   **value** (\`\`): Value to assign when `propertyKey` is a string.

Sets one or more configuration values.

Property names matching a configuration accessor are delegated to that accessor; other keys support nested paths.

## set

```ts
set(propertyKey: string, value?: unknown): this;
```

## setRaw

```ts
setRaw(propertyKey: string, value: any): this;
```

-   **propertyKey** (`string`): Configuration key or nested property path.

-   **value** (`any`): Value to store.

Sets a configuration value directly in the override map, supporting nested property paths.

## get

```ts
get<T = any>(propertyKey: string, defaultValue?: T): T;
```

-   **propertyKey** (`string`): Configuration key or nested property path.

-   **defaultValue** (`T`): Optional. Value to return when neither the overrides nor defaults define the key.

Gets a resolved configuration value, preferring explicit overrides over default values.

## decorate

```ts
decorate(key: string, value: ((...args: unknown[]) => unknown) | PropertyDescriptor): this | undefined;
```

-   **key** (`string`): Name of the member to define.

-   **value** (`((...args: unknown[]) => unknown)` | `PropertyDescriptor`): Function or property descriptor to assign to the configuration prototype.

Defines a custom configuration member when a member with the same key does not already exist.

## protected getRaw

```ts
protected getRaw(propertyKey: string, defaultValue?: any): any;
```

-   **propertyKey** (`string`): Configuration key or nested property path.

-   **defaultValue** (`any`): Optional. Value to return when no configured value exists.

Resolves a configuration value from overrides, defaults, or the supplied fallback in that order.
