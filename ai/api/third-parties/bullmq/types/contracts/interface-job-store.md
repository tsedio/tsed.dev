---
title: JobStore from @tsed/bullmq
description: api documentation of JobStore from @tsed/bullmq
meta:
 - name: keywords
   description: api typescript node.js documentation JobStore interface
---
# JobStore - @tsed/bullmq

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

<!-- Members -->

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
