---
title: RedisStore from @tsed/redis
description: api documentation of RedisStore from @tsed/redis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisStore class
---
# RedisStore - @tsed/redis

## Usage

```typescript
import { RedisStore } from "@tsed/redis";
```

> See [/packages/orm/redis/src/domain/RedisStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/redis/src/domain/RedisStore.ts#L0-L0).

## Overview

```ts
class RedisStore implements Store {
    name: string;
    isCacheableValue: any;
    isCacheable: any;
    
    constructor(options?: RedisStoreCtrOptions);
    get client(): RedisClientType | RedisClusterType<any, any>;
    getClient(): RedisClientType | RedisClusterType<any, any>;
    set(key: string, value: any, ttl?: number): Promise<void>;
    get<T = any>(key: string, options?: any): Promise<T | undefined>;
    del(key: string): Promise<void>;
    mset(args: [string, unknown][], ttl?: number): Promise<void>;
    mget(...args: string[]): Promise<any>;
    mdel(...args: string[]): Promise<void>;
    reset(): Promise<void>;
    keys(pattern?: string): Promise<string[]>;
    ttl(key: string): Promise<number>;
    
}
```

<!-- Members -->

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
get client(): RedisClientType | RedisClusterType<any, any>;
```

## getClient

```ts
getClient(): RedisClientType | RedisClusterType<any, any>;
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
mget(...args: string[]): Promise<any>;
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
