---
title: RedisClusterConfig from @tsed/ioredis
description: api documentation of RedisClusterConfig from @tsed/ioredis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisClusterConfig interface
---
# RedisClusterConfig - @tsed/ioredis

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

<!-- Members -->

## nodes

```ts
nodes: ClusterNode[];
```

## options

```ts
options?: ClusterOptions;
```
