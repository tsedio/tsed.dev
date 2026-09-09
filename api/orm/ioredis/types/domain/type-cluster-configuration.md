---
url: /api/orm/ioredis/types/domain/type-cluster-configuration.md
description: api documentation of ClusterConfiguration from @tsed/ioredis
---

## Usage

```typescript
import { ClusterConfiguration } from "@tsed/orm/ioredis/src/domain/IORedisConfiguration";
```

> See [/packages/orm/ioredis/src/domain/IORedisConfiguration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/ioredis/src/domain/IORedisConfiguration.ts#L0-L0).

## Overview

```ts
type ClusterConfiguration = {
    nodes: string[];
} & ClusterOptions;
```

## nodes

```ts
nodes: string[];
```
