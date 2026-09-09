---
title: RedisAdapter from @tsed/adapters-redis
description: api documentation of RedisAdapter from @tsed/adapters-redis
meta:
 - name: keywords
   description: api typescript node.js documentation RedisAdapter class
---
# RedisAdapter - @tsed/adapters-redis

## Usage

```typescript
import { RedisAdapter } from "@tsed/adapters-redis";
```

> See [/packages/orm/adapters-redis/src/adapters/RedisAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters-redis/src/adapters/RedisAdapter.ts#L0-L0).

## Overview

```ts
class RedisAdapter<Model extends AdapterModel> extends Adapter<Model> {
    readonly hooks: Hooks;
    readonly connectionName: string;
    readonly connection: RedisConnection;
    readonly keyPrefix: string;
    protected useHash: boolean;
    constructor(options: RedisAdapterConstructorOptions);
    get db(): Redis;
    key(id: string): string;
    create(payload: Partial<Model>, expiresAt?: Date): Promise<Model>;
    upsert(id: string, payload: Model, expiresAt?: Date): Promise<Model>;
    update(id: string, payload: Model, expiresAt?: Date): Promise<Model | undefined>;
    updateOne(predicate: Partial<Model & any>, payload: Model, expiresAt?: Date): Promise<Model | undefined>;
    findOne(predicate: Partial<Model & any>): Promise<Model | undefined>;
    findById(_id: string): Promise<Model | undefined>;
    findAll(predicate?: Partial<Model & any>): Promise<Model[]>;
    deleteOne(predicate: Partial<Model & any>): Promise<Model | undefined>;
    deleteById(_id: string): Promise<Model | undefined>;
    deleteMany(predicate: Partial<Model>): Promise<Model[]>;
    prefix(key: string): string;
    protected callCmd(target: any, methods: string[], ...args: any[]): any;
    protected extractIdFromIndexedKey(key: string): string | undefined;
    protected findKeys(props: any): Promise<string[]>;
    protected insert(payload: Partial<Model>, expiresAt?: Date): Promise<any>;
    protected getAllIndex(id: string): Promise<string[]>;
    protected getIndexedKey(id: string, propertyKey: string, value: any): string;
    protected getAll(): Promise<Model[]>;
    protected findAllBy(props: Partial<Model & any>): Promise<Model[]>;
}
```

<!-- Members -->

## readonly hooks

```ts
readonly hooks: Hooks;
```

## readonly connectionName

```ts
readonly connectionName: string;
```

## readonly connection

```ts
readonly connection: RedisConnection;
```

## readonly keyPrefix

```ts
readonly keyPrefix: string;
```

## protected useHash

```ts
protected useHash: boolean;
```

## get db

```ts
get db(): Redis;
```

## key

```ts
key(id: string): string;
```

## create

```ts
create(payload: Partial<Model>, expiresAt?: Date): Promise<Model>;
```

## upsert

```ts
upsert(id: string, payload: Model, expiresAt?: Date): Promise<Model>;
```

## update

```ts
update(id: string, payload: Model, expiresAt?: Date): Promise<Model | undefined>;
```

## updateOne

```ts
updateOne(predicate: Partial<Model & any>, payload: Model, expiresAt?: Date): Promise<Model | undefined>;
```

## findOne

```ts
findOne(predicate: Partial<Model & any>): Promise<Model | undefined>;
```

## findById

```ts
findById(_id: string): Promise<Model | undefined>;
```

## findAll

```ts
findAll(predicate?: Partial<Model & any>): Promise<Model[]>;
```

## deleteOne

```ts
deleteOne(predicate: Partial<Model & any>): Promise<Model | undefined>;
```

## deleteById

```ts
deleteById(_id: string): Promise<Model | undefined>;
```

## deleteMany

```ts
deleteMany(predicate: Partial<Model>): Promise<Model[]>;
```

## prefix

```ts
prefix(key: string): string;
```

## protected callCmd

```ts
protected callCmd(target: any, methods: string[], ...args: any[]): any;
```

## protected extractIdFromIndexedKey

```ts
protected extractIdFromIndexedKey(key: string): string | undefined;
```

## protected findKeys

```ts
protected findKeys(props: any): Promise<string[]>;
```

## protected insert

```ts
protected insert(payload: Partial<Model>, expiresAt?: Date): Promise<any>;
```

## protected getAllIndex

```ts
protected getAllIndex(id: string): Promise<string[]>;
```

## protected getIndexedKey

```ts
protected getIndexedKey(id: string, propertyKey: string, value: any): string;
```

## protected getAll

```ts
protected getAll(): Promise<Model[]>;
```

## protected findAllBy

```ts
protected findAllBy(props: Partial<Model & any>): Promise<Model[]>;
```
