---
url: /api/third-parties/bullmq/types/contracts/interface-job-methods.md
description: api documentation of JobMethods from @tsed/bullmq
---

## Usage

```typescript
import { JobMethods } from "@tsed/bullmq";
```

> See [/packages/third-parties/bullmq/src/contracts/JobMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/bullmq/src/contracts/JobMethods.ts#L0-L0).

## Overview

```ts
interface JobMethods<DataType = unknown, ReturnType = unknown> {
    handle(payload: DataType, job: Job<DataType, ReturnType>): ReturnType | Promise<ReturnType>;
    jobId?(payload: DataType): string | Promise<string>;
}
```

## handle

```ts
handle(payload: DataType, job: Job<DataType, ReturnType>): ReturnType | Promise<ReturnType>;
```

## jobId

```ts
jobId?(payload: DataType): string | Promise<string>;
```
