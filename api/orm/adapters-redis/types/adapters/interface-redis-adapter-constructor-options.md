---
url: >-
  /api/orm/adapters-redis/types/adapters/interface-redis-adapter-constructor-options.md
description: api documentation of RedisAdapterConstructorOptions from @tsed/adapters-redis
---

## Usage

```typescript
import { RedisAdapterConstructorOptions } from "@tsed/adapters-redis";
```

> See [/packages/orm/adapters-redis/src/adapters/RedisAdapter.ts](https://github.com/tsedio/tsed/blob/v8.40.2/packages/orm/adapters-redis/src/adapters/RedisAdapter.ts#L0-L0).

## Overview

```ts
interface RedisAdapterConstructorOptions extends AdapterConstructorOptions {
    connectionName?: string;
    keyPrefix?: string;
    useHash?: boolean;
}
```

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
