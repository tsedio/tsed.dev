---
url: /api/di/types/common/interfaces/interface-alter-run-in-context.md
description: api documentation of AlterRunInContext from @tsed/di
---

## Usage

```typescript
import { AlterRunInContext } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/AlterRunInContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/AlterRunInContext.ts#L0-L0).

## Overview

```ts
interface AlterRunInContext {
    $alterRunInContext(next: (...args: unknown[]) => unknown): () => unknown | Promise<() => unknown>;
}
```

## Description

Interface for customizing the execution context of asynchronous operations.

Implement this interface to wrap or modify the async context in which operations run,
enabling custom context management, async local storage, or execution wrapping.

### Usage

```typescript
import {Injectable, AlterRunInContext} from "@tsed/di";
import {AsyncLocalStorage} from "async_hooks";

@Injectable()
class CustomContextProvider implements AlterRunInContext {


  $alterRunInContext(next: Function) {
    return () => {
      return this.storage.run({requestId: generateId()}, next);
    };
  }
}
```

## $alterRunInContext

```ts
$alterRunInContext(next: (...args: unknown[]) => unknown): () => unknown | Promise<() => unknown>;
```
