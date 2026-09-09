---
url: /api/di/types/common/decorators/decorator-optional-lazy-inject.md
description: api documentation of OptionalLazyInject from @tsed/di
---

## Usage

```typescript
import { OptionalLazyInject } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/lazyInject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/lazyInject.ts#L0-L0).

## Overview

```ts
function OptionalLazyInject(resolver: () => Promise<{
    default: unknown;
}>): PropertyDecorator;
export function OptionalLazyInject(key: string, resolver: () => Promise<{
    default: unknown;
}>): PropertyDecorator;
```

## Description

Optionally inject a provider from a dynamic import, returning undefined on failure.

Similar to `@LazyInject` but gracefully handles import failures by returning undefined.
Useful for truly optional dependencies that may not be available in all environments.

### Usage

```typescript
import type {PlatformException} from "@tsed/platform-exceptions";
import {Injectable, OptionalLazyInject} from "@tsed/di";

@Injectable()
export class MyService {
  @OptionalLazyInject(() => import("@tsed/platform-exceptions"))
  exceptions?: Promise<PlatformException>;

  async handleError(error: Error) {
    const handler = await this.exceptions;
    if (handler) {
      handler.handle(error);
    } else {
      console.error("Exception handler not available:", error);
    }
  }
}
```

## default

```ts
default: unknown;
```

## default

```ts
default: unknown;
```
