---
title: RedisAdapterConstructorOptions from @tsed/adapters-redis
description: api documentation of RedisAdapterConstructorOptions from @tsed/adapters-redis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisAdapterConstructorOptions interface
---
# RedisAdapterConstructorOptions - @tsed/adapters-redis

## Usage

```typescript
import { RedisAdapterConstructorOptions } from "@tsed/adapters-redis";
```

> See [/packages/orm/adapters-redis/src/adapters/RedisAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters-redis/src/adapters/RedisAdapter.ts#L0-L0).

## Overview

```ts
interface RedisAdapterConstructorOptions extends AdapterConstructorOptions {
    connectionName?: string;
    keyPrefix?: string;
    useHash?: boolean;
}
```

<!-- Members -->

## connectionName

```ts
connectionName?: string;
```

## keyPrefix

```ts
keyPrefix?: string;
```

## useHash

```ts
useHash?: boolean;
```
