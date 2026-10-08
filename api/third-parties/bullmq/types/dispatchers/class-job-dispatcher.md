---
url: /api/third-parties/bullmq/types/dispatchers/class-job-dispatcher.md
description: api documentation of JobDispatcher from @tsed/bullmq
---

## Usage

```typescript
import { JobDispatcher } from "@tsed/bullmq";
```

> See [/packages/third-parties/bullmq/src/dispatchers/JobDispatcher.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/third-parties/bullmq/src/dispatchers/JobDispatcher.ts#L0-L0).

## Overview

```ts
class JobDispatcher {
    dispatch<T extends JobMethods>(job: Type<T>, payload?: Parameters<T["handle"]>[0], options?: JobOptions): Promise<BullMQJob>;
    dispatch<P = unknown>(job: JobDispatcherOptions, payload?: P, options?: JobOptions): Promise<BullMQJob>;
    dispatch<P = unknown>(job: string, payload?: P, options?: JobOptions): Promise<BullMQJob>;
    
    
}
```

## dispatch

```ts
dispatch<T extends JobMethods>(job: Type<T>, payload?: Parameters<T["handle"]>[0], options?: JobOptions): Promise<BullMQJob>;
```

## dispatch

```ts
dispatch<P = unknown>(job: JobDispatcherOptions, payload?: P, options?: JobOptions): Promise<BullMQJob>;
```

## dispatch

```ts
dispatch<P = unknown>(job: string, payload?: P, options?: JobOptions): Promise<BullMQJob>;
```
