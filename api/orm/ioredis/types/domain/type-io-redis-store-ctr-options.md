---
url: /api/orm/ioredis/types/domain/type-io-redis-store-ctr-options.md
description: api documentation of IORedisStoreCtrOptions from @tsed/ioredis
---

## Usage

```typescript
import { IORedisStoreCtrOptions } from "@tsed/orm/ioredis/src/domain/IORedisStore";
```

> See [/packages/orm/ioredis/src/domain/IORedisStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/ioredis/src/domain/IORedisStore.ts#L0-L0).

## Overview

```ts
type IORedisStoreCtrOptions = (RedisOptions | {
    clusterConfig: RedisClusterConfig;
}) & Config & {
    redisInstance?: Redis | Cluster;
};
```

## clusterConfig

```ts
clusterConfig: RedisClusterConfig;
```

##

```ts
}) & Config & {
```

## redisInstance

```ts
redisInstance?: Redis | Cluster;
```
