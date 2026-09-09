---
title: ClusterConfiguration from @tsed/ioredis
description: api documentation of ClusterConfiguration from @tsed/ioredis
meta:
 - name: keywords
   description: api typescript node.js documentation ClusterConfiguration type
---
# ClusterConfiguration - @tsed/ioredis

## Usage

```typescript
import { ClusterConfiguration } from "@tsed/orm/ioredis/src/domain/IORedisConfiguration";
```

> See [/packages/orm/ioredis/src/domain/IORedisConfiguration.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/ioredis/src/domain/IORedisConfiguration.ts#L0-L0).

## Overview

```ts
type ClusterConfiguration = {
    nodes: string[];
} & ClusterOptions;
```

<!-- Members -->

## nodes

```ts
nodes: string[];
```
