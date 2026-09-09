---
url: /api/orm/redis/types/domain/type-redis-store-ctr-options.md
description: api documentation of RedisStoreCtrOptions from @tsed/redis
---

## Usage

```typescript
import { RedisStoreCtrOptions } from "@tsed/orm/redis/src/domain/RedisStore";
```

> See [/packages/orm/redis/src/domain/RedisStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/redis/src/domain/RedisStore.ts#L0-L0).

## Overview

```ts
type RedisStoreCtrOptions = (Record<string, any> | {
    clusterConfig: RedisClusterConfig;
}) & Config & {
    redisInstance?: RedisClientType | RedisClusterType<any, any>;
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
redisInstance?: RedisClientType | RedisClusterType<any, any>;
```
