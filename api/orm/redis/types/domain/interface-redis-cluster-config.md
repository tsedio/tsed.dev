---
url: /api/orm/redis/types/domain/interface-redis-cluster-config.md
description: api documentation of RedisClusterConfig from @tsed/redis
---

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

## nodes

```ts
nodes: RedisClusterOptions["rootNodes"][];
```

## options

```ts
options?: Record<string, any>;
```
