---
url: /api/di/types/browser/utils/function-run-in-context.md
description: api documentation of runInContext from @tsed/di
---

## Usage

```typescript
import { runInContext } from "@tsed/di";
```

> See [/packages/di/src/browser/utils/asyncHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/browser/utils/asyncHookContext.ts#L0-L0).

## Overview

```ts
function runInContext<Result = unknown>(ctx: DIContext | undefined, cb: (...args: unknown[]) => Result, injector?: {
    alterAsync?: (name: string, cb: any) => Promise<any>;
}): Promise<Result>;
```

## alterAsync:

```ts
alterAsync?: (name: string, cb: any) => Promise<any>;
```
