---
title: IORedisConfiguration from @tsed/ioredis
description: api documentation of IORedisConfiguration from @tsed/ioredis
meta:
 - name: keywords
   description: api typescript node.js documentation IORedisConfiguration type
---
# IORedisConfiguration - @tsed/ioredis

## Usage

```typescript
import { IORedisConfiguration } from "@tsed/orm/ioredis/src/domain/IORedisConfiguration";
```

> See [/packages/orm/ioredis/src/domain/IORedisConfiguration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/ioredis/src/domain/IORedisConfiguration.ts#L0-L0).

## Overview

```ts
type IORedisConfiguration = BaseIORedisConfiguration & (RedisOptions | ClusterConfiguration) & {
    redisInstance?: Redis | Cluster;
    sentinelName?: string;
};
```

<!-- Members -->

## redisInstance

```ts
redisInstance?: Redis | Cluster;
```

## sentinelName

```ts
sentinelName?: string;
```
