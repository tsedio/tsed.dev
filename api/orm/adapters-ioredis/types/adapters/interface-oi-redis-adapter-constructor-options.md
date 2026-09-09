---
url: >-
  /api/orm/adapters-ioredis/types/adapters/interface-oi-redis-adapter-constructor-options.md
description: >-
  api documentation of OIRedisAdapterConstructorOptions from
  @tsed/adapters-ioredis
---

## Usage

```typescript
import { OIRedisAdapterConstructorOptions } from "@tsed/adapters-ioredis";
```

> See [/packages/orm/adapters-ioredis/src/adapters/OIRedisAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters-ioredis/src/adapters/OIRedisAdapter.ts#L0-L0).

## Overview

```ts
interface OIRedisAdapterConstructorOptions extends AdapterConstructorOptions {
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
