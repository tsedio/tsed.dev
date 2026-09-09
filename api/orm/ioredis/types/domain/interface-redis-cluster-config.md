---
url: /api/orm/ioredis/types/domain/interface-redis-cluster-config.md
description: api documentation of RedisClusterConfig from @tsed/ioredis
---

## Usage

```typescript
import { RedisClusterConfig } from "@tsed/ioredis";
```

> See [/packages/orm/ioredis/src/domain/IORedisStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/ioredis/src/domain/IORedisStore.ts#L0-L0).

## Overview

```ts
interface RedisClusterConfig {
    nodes: ClusterNode[];
    options?: ClusterOptions;
}
```

## nodes

```ts
nodes: ClusterNode[];
```

## options

```ts
options?: ClusterOptions;
```
