---
url: /api/di/types/common/interfaces/interface-provider-opts.md
description: api documentation of ProviderOpts from @tsed/di
---

## Usage

```typescript
import { ProviderOpts } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/ProviderOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/ProviderOpts.ts#L0-L0).

## Overview

```ts
interface ProviderOpts<T = any> {
    token: TokenProvider<T>;
    alias?: TokenProvider;
    type?: TokenProvider | ProviderType;
    instance?: T;
    deps?: TokenProvider[];
    useClass?: Type<T>;
    useFactory?: Function;
    useAsyncFactory?: Function;
    useValue?: any;
    scope?: ProviderScope;
    hooks?: Record<string, (instance: T, ...args: any[]) => Promise<any> | any>;
    [key: string]: any;
}
```

## Description

Configuration options for registering a provider in the DI container.

Defines how a provider should be created, managed, and resolved by the injector.
Supports multiple creation strategies including class instantiation, factory functions, and predefined values.

### Usage

```typescript
// Using a class
const opts1: ProviderOpts = {
  token: MyService,
  useClass: MyService
};

// Using a factory
const opts2: ProviderOpts = {
  token: "CONFIG",
  useFactory: () => loadConfig()
};

// Using a value
const opts3: ProviderOpts = {
  token: "API_KEY",
  useValue: "secret-key"
};
```

## token

```ts
token: TokenProvider<T>;
```

An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`).

## alias

```ts
alias?: TokenProvider;
```

Create alias token to retrieve the instance provider.

## type

```ts
type?: TokenProvider | ProviderType;
```

Provider type

## instance

```ts
instance?: T;
```

Instance build by the injector

## deps

```ts
deps?: TokenProvider[];
```

Define dependencies to build the provider

## useClass

```ts
useClass?: Type<T>;
```

Class to instantiate for the `token`.

## useFactory

```ts
useFactory?: Function;
```

Provide a function to build the provider

## useAsyncFactory

```ts
useAsyncFactory?: Function;
```

Provide an async function to build the provider

## useValue

```ts
useValue?: any;
```

Provide predefined value

## scope

```ts
scope?: ProviderScope;
```

Scope used by the injector to build the provider.

## hooks: Record

```ts
hooks?: Record<string, (instance: T, ...args: any[]) => Promise<any> | any>;
```

hooks to intercept custom events

## \[key: string]

```ts
[key: string]: any;
```
