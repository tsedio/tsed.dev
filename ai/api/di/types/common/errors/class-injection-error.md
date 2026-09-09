---
title: InjectionError from @tsed/di
description: api documentation of InjectionError from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation InjectionError class
---
# InjectionError - @tsed/di

## Usage

```typescript
import { InjectionError } from "@tsed/di";
```

> See [/packages/di/src/common/errors/InjectionError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/errors/InjectionError.ts#L0-L0).

## Overview

```ts
class InjectionError extends Error {
    name: string;
    tokens: TokenProvider[];
    origin: any;
    constructor(token: TokenProvider, origin?: any);
    static throwInjectorError(token: any, currentDependency: any, error: any): void;
}
```

<!-- Description -->

## Description

Error thrown when dependency injection fails.

Provides detailed information about the failed injection including the dependency chain
and the original error. Helps diagnose circular dependencies, missing providers, and
configuration issues in the DI system.

### Usage

```typescript
import {InjectionError} from "@tsed/di";

try {
  injector.invoke(MyService);
} catch (error) {
  if (error instanceof InjectionError) {
    console.log("Dependency chain:", error.tokens);
    console.log("Original error:", error.origin);
  }
}
```

<!-- Members -->

## name

```ts
name: string;
```

## tokens

```ts
tokens: TokenProvider[];
```

## origin

```ts
origin: any;
```

## static throwInjectorError

```ts
static throwInjectorError(token: any, currentDependency: any, error: any): void;
```
