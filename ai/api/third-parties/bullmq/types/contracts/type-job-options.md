---
title: JobOptions from @tsed/bullmq
description: api documentation of JobOptions from @tsed/bullmq
meta:
 - name: keywords
   description: api typescript node.js documentation JobOptions type
---
# JobOptions - @tsed/bullmq

## Usage

```typescript
import { JobOptions } from "@tsed/third-parties/bullmq/src/contracts/JobStore";
```

> See [/packages/third-parties/bullmq/src/contracts/JobStore.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/third-parties/bullmq/src/contracts/JobStore.ts#L0-L0).

## Overview

```ts
type JobOptions = Omit<JobsOptions, "repeat"> & {
    repeat?: Omit<RepeatOptions, "key">;
};
```

<!-- Description -->

## Description

Job options accepted by `@JobController` and `JobDispatcher`.

`repeat` is kept as a Ts.ED option: bullmq v6 removed it from `Queue.add()`,
so repeating jobs are registered through `Queue.upsertJobScheduler()`.

<!-- Members -->

## repeat

```ts
repeat?: Omit<RepeatOptions, "key">;
```
