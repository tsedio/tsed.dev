---
url: /api/third-parties/bullmq/types/contracts/interface-job-store.md
description: api documentation of JobStore from @tsed/bullmq
---

## Usage

```typescript
import { JobStore } from "@tsed/bullmq";
```

> See [/packages/third-parties/bullmq/src/contracts/JobStore.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/third-parties/bullmq/src/contracts/JobStore.ts#L0-L0).

## Overview

```ts
interface JobStore {
    name: string;
    queue: string;
    opts: JobOptions;
}
```

## name

```ts
name: string;
```

## queue

```ts
queue: string;
```

## opts

```ts
opts: JobOptions;
```
