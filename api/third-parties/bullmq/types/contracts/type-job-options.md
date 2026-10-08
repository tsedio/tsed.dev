---
url: /api/third-parties/bullmq/types/contracts/type-job-options.md
description: api documentation of JobOptions from @tsed/bullmq
---

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

## Description

Job options accepted by `@JobController` and `JobDispatcher`.

`repeat` is kept as a Ts.ED option: bullmq v6 removed it from `Queue.add()`,
so repeating jobs are registered through `Queue.upsertJobScheduler()`.

## repeat

```ts
repeat?: Omit<RepeatOptions, "key">;
```
