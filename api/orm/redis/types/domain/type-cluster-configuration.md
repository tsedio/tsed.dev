---
url: /api/orm/redis/types/domain/type-cluster-configuration.md
description: api documentation of ClusterConfiguration from @tsed/redis
---

## Usage

```typescript
import { ClusterConfiguration } from "@tsed/orm/redis/src/domain/RedisConfiguration";
```

> See [/packages/orm/redis/src/domain/RedisConfiguration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/redis/src/domain/RedisConfiguration.ts#L0-L0).

## Overview

```ts
type ClusterConfiguration = {
    nodes: any[];
} & Record<string, any>;
```

## nodes

```ts
nodes: any[];
```
