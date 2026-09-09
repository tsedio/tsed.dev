---
title: JobMethods from @tsed/bullmq
description: api documentation of JobMethods from @tsed/bullmq
meta:
 - name: keywords
   description: api typescript node.js documentation JobMethods interface
---
# JobMethods - @tsed/bullmq

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

<!-- Members -->

## handle

```ts
handle(payload: DataType, job: Job<DataType, ReturnType>): ReturnType | Promise<ReturnType>;
```

## jobId

```ts
jobId?(payload: DataType): string | Promise<string>;
```
