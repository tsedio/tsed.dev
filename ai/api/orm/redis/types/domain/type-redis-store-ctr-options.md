---
title: RedisStoreCtrOptions from @tsed/redis
description: api documentation of RedisStoreCtrOptions from @tsed/redis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisStoreCtrOptions type
---
# RedisStoreCtrOptions - @tsed/redis

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

<!-- Members -->

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
