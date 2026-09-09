---
title: RedisConfiguration from @tsed/redis
description: api documentation of RedisConfiguration from @tsed/redis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisConfiguration type
---
# RedisConfiguration - @tsed/redis

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

<!-- Members -->

## redisInstance

```ts
redisInstance?: RedisClientType | RedisClusterType<any, any>;
```

## sentinelName

```ts
sentinelName?: string;
```
