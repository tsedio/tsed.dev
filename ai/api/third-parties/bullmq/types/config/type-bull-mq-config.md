---
title: BullMQConfig from @tsed/bullmq
description: api documentation of BullMQConfig from @tsed/bullmq
meta:
 - name: keywords
   description: api typescript node.js documentation BullMQConfig type
---
# BullMQConfig - @tsed/bullmq

## Usage

```typescript
import { BullMQConfig } from "@tsed/third-parties/bullmq/src/config/config";
```

> See [/packages/third-parties/bullmq/src/config/config.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/bullmq/src/config/config.ts#L0-L0).

## Overview

```ts
type BullMQConfig = {
    queues?: string[];
    connection: ConnectionOptions;
    defaultQueueOptions?: Partial<QueueOptions>;
    queueOptions?: Record<string, Partial<QueueOptions>>;
    disableWorker?: boolean;
    workerQueues?: string[];
    defaultWorkerOptions?: Partial<WorkerOptions>;
    workerOptions?: Record<string, Partial<WorkerOptions>>;
    logLevel?: "debug" | "info" | "warn" | "error" | "off" | "all";
};
```

<!-- Members -->

## queues

```ts
queues?: string[];
```

Specify queue name's to create

## connection

```ts
connection: ConnectionOptions;
```

Default connection to use for queue's and worker's

## defaultQueueOptions

```ts
defaultQueueOptions?: Partial<QueueOptions>;
```

Default queue options which are applied to every queue

Can be extended/overridden by `queueOptions`

## queueOptions

```ts
queueOptions?: Record<string, Partial<QueueOptions>>;
```

Specify additional queue options by queue name

## disableWorker

```ts
disableWorker?: boolean;
```

Disable the creation of any worker.

All other worker configuration will be ignored

## workerQueues

```ts
workerQueues?: string[];
```

Specify for which queues to start a worker for.

Defaultly for every queue added in the `queues` parameter

## defaultWorkerOptions

```ts
defaultWorkerOptions?: Partial<WorkerOptions>;
```

Default worker options which are applied to every worker

Can be extended/overridden by `workerOptions`

## workerOptions

```ts
workerOptions?: Record<string, Partial<WorkerOptions>>;
```

Specify additional worker options by queue name

## logLevel

```ts
logLevel?: "debug" | "info" | "warn" | "error" | "off" | "all";
```

Log level for the module

Default: Info
