---
url: /api/third-parties/bullmq/types/class-bull-mq-module.md
description: api documentation of BullMQModule from @tsed/bullmq
---

## Usage

```typescript
import { BullMQModule } from "@tsed/bullmq";
```

> See [/packages/third-parties/bullmq/src/BullMQModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/bullmq/src/BullMQModule.ts#L0-L0).

## Overview

```ts
class BullMQModule implements OnInit, OnDestroy {
    constructor();
    get config(): BullMQConfig;
    $onInit(): void;
    $onDestroy(): Promise<void>;
    isEnabled(): boolean;
    isWorkerEnabled(): boolean | undefined;
    
    
    
}
```

## get config

```ts
get config(): BullMQConfig;
```

## $onInit

```ts
$onInit(): void;
```

## $onDestroy

```ts
$onDestroy(): Promise<void>;
```

## isEnabled

```ts
isEnabled(): boolean;
```

## isWorkerEnabled

```ts
isWorkerEnabled(): boolean | undefined;
```
