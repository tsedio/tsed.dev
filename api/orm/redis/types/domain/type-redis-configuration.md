---
url: /api/orm/redis/types/domain/type-redis-configuration.md
description: api documentation of RedisConfiguration from @tsed/redis
---

## Usage

```typescript
import { RedisConfiguration } from "@tsed/orm/redis/src/domain/RedisConfiguration";
```

> See [/packages/orm/redis/src/domain/RedisConfiguration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/redis/src/domain/RedisConfiguration.ts#L0-L0).

## Overview

```ts
type RedisConfiguration = BaseRedisConfiguration & (RedisClientOptions | ClusterConfiguration) & {
    redisInstance?: RedisClientType | RedisClusterType<any, any>;
    sentinelName?: string;
};
```

## redisInstance

```ts
redisInstance?: RedisClientType | RedisClusterType<any, any>;
```

## sentinelName

```ts
sentinelName?: string;
```
