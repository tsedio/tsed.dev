---
title: LazyInject from @tsed/di
description: api documentation of LazyInject from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation LazyInject decorator
---
# LazyInject - @tsed/di

## Usage

```typescript
import { LazyInject } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/lazyInject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/lazyInject.ts#L0-L0).

## Overview

```ts
function LazyInject(resolver: () => Promise<{
    default: unknown;
}>): PropertyDecorator;
export function LazyInject(key: string, resolver: () => Promise<{
    default: unknown;
}>): PropertyDecorator;
```

<!-- Description -->

## Description

Lazily inject a provider from a dynamic import.

Defers loading and injection of a provider until the property is first accessed.
Useful for code splitting, optional dependencies, or reducing initial bundle size.

### Usage

```typescript
import type {PlatformException} from "@tsed/platform-exceptions";
import {Injectable, LazyInject} from "@tsed/di";

@Injectable()
export class MyService {
  // Import default export
  @LazyInject(() => import("@tsed/platform-exceptions"))
  exceptions: Promise<PlatformException>;

  // Import named export
  @LazyInject("MyPlugin", () => import("./plugins"))
  plugin: Promise<MyPlugin>;

  async handleError(error: Error) {
    const handler = await this.exceptions;
    handler.handle(error);
  }
}
```

<!-- Members -->

## default

```ts
default: unknown;
```

## default

```ts
default: unknown;
```
