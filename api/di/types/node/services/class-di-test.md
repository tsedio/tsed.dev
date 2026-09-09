---
url: /api/di/types/node/services/class-di-test.md
description: api documentation of DITest from @tsed/di
---

## Usage

```typescript
import { DITest } from "@tsed/di";
```

> See [/packages/di/src/node/services/DITest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/services/DITest.ts#L0-L0).

## Overview

```ts
class DITest {
    static get injector(): InjectorService;
    static create(settings?: Partial<TsED.Configuration>): Promise<void>;
    static createContainer(): Promise<void>;
    static createInjector(settings?: any): InjectorService;
    static reset(): Promise<void>;
    static invoke<T = any>(target: TokenProvider<T>, providers?: UseImportTokenProviderOpts[]): Promise<T>;
    static get<T = any>(target: TokenProvider): T;
    static createDIContext(): DIContext;
    protected static configure(settings?: Partial<TsED.Configuration>): Partial<TsED.Configuration>;
}
```

## Description

Tool to run test with lightweight DI sandbox.

## static get injector

```ts
static get injector(): InjectorService;
```

## static create

```ts
static create(settings?: Partial<TsED.Configuration>): Promise<void>;
```

## static createContainer

```ts
static createContainer(): Promise<void>;
```

## static createInjector

```ts
static createInjector(settings?: any): InjectorService;
```

Create a new injector with the right default services

## static reset

```ts
static reset(): Promise<void>;
```

Resets the test injector of the test context, so it won't pollute your next test. Call this in your `tearDown` logic.

## static invoke

```ts
static invoke<T = any>(target: TokenProvider<T>, providers?: UseImportTokenProviderOpts[]): Promise<T>;
```

Invoke a provider and return a fresh instance

## static get

```ts
static get<T = any>(target: TokenProvider): T;
```

Return the instance from injector registry

## static createDIContext

```ts
static createDIContext(): DIContext;
```

## protected static configure

```ts
protected static configure(settings?: Partial<TsED.Configuration>): Partial<TsED.Configuration>;
```
