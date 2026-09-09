---
url: /api/orm/ioredis/types/domain/class-io-redis-store.md
description: api documentation of IORedisStore from @tsed/ioredis
---

## Usage

```typescript
import { IORedisStore } from "@tsed/ioredis";
```

> See [/packages/orm/ioredis/src/domain/IORedisStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/ioredis/src/domain/IORedisStore.ts#L0-L0).

## Overview

```ts
class IORedisStore implements Store {
    name: string;
    isCacheableValue: any;
    isCacheable: any;
    
    constructor(options?: IORedisStoreCtrOptions);
    get client(): Redis | Cluster;
    getClient(): Redis | Cluster;
    set(key: string, value: any, ttl?: number): Promise<void>;
    get<T = any>(key: string, options?: any): Promise<T | undefined>;
    del(key: string): Promise<void>;
    mset(args: [string, unknown][], ttl?: number): Promise<void>;
    mget(...args: string[]): Promise<unknown[]>;
    mdel(...args: string[]): Promise<void>;
    reset(): Promise<void>;
    keys(pattern?: string): Promise<string[]>;
    ttl(key: string): Promise<number>;
    
}
```

## name

```ts
name: string;
```

## isCacheableValue

```ts
isCacheableValue: any;
```

## isCacheable

```ts
isCacheable: any;
```

## get client

```ts
get client(): Redis | Cluster;
```

## getClient

```ts
getClient(): Redis | Cluster;
```

## set

```ts
set(key: string, value: any, ttl?: number): Promise<void>;
```

## get

```ts
get<T = any>(key: string, options?: any): Promise<T | undefined>;
```

## del

```ts
del(key: string): Promise<void>;
```

## mset

```ts
mset(args: [string, unknown][], ttl?: number): Promise<void>;
```

## mget

```ts
mget(...args: string[]): Promise<unknown[]>;
```

## mdel

```ts
mdel(...args: string[]): Promise<void>;
```

## reset

```ts
reset(): Promise<void>;
```

## keys

```ts
keys(pattern?: string): Promise<string[]>;
```

## ttl

```ts
ttl(key: string): Promise<number>;
```
