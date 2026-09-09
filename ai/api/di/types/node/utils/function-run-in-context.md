---
title: runInContext from @tsed/di
description: api documentation of runInContext from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation runInContext function
---
# runInContext - @tsed/di

## Usage

```typescript
import { runInContext } from "@tsed/di";
```

> See [/packages/di/src/node/utils/asyncHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/utils/asyncHookContext.ts#L0-L0).

## Overview

```ts
function runInContext<Result = unknown>(ctx: DIContext | undefined, cb: (...args: unknown[]) => Result, injector?: InjectorService): Promise<Result>;
```
