---
url: /api/orm/mikro-orm/types/interfaces/interface-retry-strategy.md
description: api documentation of RetryStrategy from @tsed/mikro-orm
---

## Usage

```typescript
import { RetryStrategy } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/interfaces/RetryStrategy.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/interfaces/RetryStrategy.ts#L0-L0).

## Overview

```ts
interface RetryStrategy {
    acquire<T extends (...args: unknown[]) => unknown>(task: T): Promise<ReturnType<T> extends Promise<infer V> ? V : ReturnType<T>>;
}
export const RetryStrategy: unique symbol;
```

## acquire

```ts
acquire<T extends (...args: unknown[]) => unknown>(task: T): Promise<ReturnType<T> extends Promise<infer V> ? V : ReturnType<T>>;
```
