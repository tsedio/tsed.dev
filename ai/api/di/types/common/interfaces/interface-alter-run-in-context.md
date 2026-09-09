---
title: AlterRunInContext from @tsed/di
description: api documentation of AlterRunInContext from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation AlterRunInContext interface
---
# AlterRunInContext - @tsed/di

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

<!-- Description -->

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

<!-- Members -->

## $alterRunInContext

```ts
$alterRunInContext(next: (...args: unknown[]) => unknown): () => unknown | Promise<() => unknown>;
```
