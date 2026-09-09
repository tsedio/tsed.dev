---
title: RedisClusterConfig from @tsed/redis
description: api documentation of RedisClusterConfig from @tsed/redis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisClusterConfig interface
---
# RedisClusterConfig - @tsed/redis

## Usage

```typescript
import { RedisClusterConfig } from "@tsed/redis";
```

> See [/packages/orm/redis/src/domain/RedisStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/redis/src/domain/RedisStore.ts#L0-L0).

## Overview

```ts
interface RedisClusterConfig {
    nodes: RedisClusterOptions["rootNodes"][];
    options?: Record<string, any>;
}
```

<!-- Members -->

## nodes

```ts
nodes: RedisClusterOptions["rootNodes"][];
```

## options

```ts
options?: Record<string, any>;
```
