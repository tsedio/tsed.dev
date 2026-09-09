---
title: TestContainersMongo from @tsed/testcontainers-mongo
description: api documentation of TestContainersMongo from @tsed/testcontainers-mongo
meta:
 - name: keywords
   description: api typescript node.js documentation TestContainersMongo class
---
# TestContainersMongo - @tsed/testcontainers-mongo

## Usage

```typescript
import { TestContainersMongo } from "@tsed/testcontainers-mongo";
```

> See [/packages/testcontainers/mongo/src/services/TestContainersMongo.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/testcontainers/mongo/src/services/TestContainersMongo.ts#L0-L0).

## Overview

```ts
class TestContainersMongo {
    static startMongoServer: typeof startMongoServer;
    static stopMongoServer: typeof stopMongoServer;
    static getMongoConnectionsOptions: typeof getMongoConnectionsOptions;
    static getMongoConnectionOptions: typeof getMongoConnectionOptions;
    static create(options?: Partial<TsED.Configuration>): Promise<void>;
    static bootstrap(mod: unknown, opts?: Partial<TsED.Configuration>): () => Promise<void>;
    static reset(collectionName?: string): Promise<void>;
    static cleanCollection(collectionName: string, mongoSettings?: {
        id: string;
        url: string;
        connectionOptions: import("mongoose").ConnectOptions;
    }[]): Promise<void>;
}
```

<!-- Members -->

## static startMongoServer

```ts
static startMongoServer: typeof startMongoServer;
```

## static stopMongoServer

```ts
static stopMongoServer: typeof stopMongoServer;
```

## static getMongoConnectionsOptions

```ts
static getMongoConnectionsOptions: typeof getMongoConnectionsOptions;
```

## static getMongoConnectionOptions

```ts
static getMongoConnectionOptions: typeof getMongoConnectionOptions;
```

## static create

```ts
static create(options?: Partial<TsED.Configuration>): Promise<void>;
```

## static bootstrap

```ts
static bootstrap(mod: unknown, opts?: Partial<TsED.Configuration>): () => Promise<void>;
```

## static reset

```ts
static reset(collectionName?: string): Promise<void>;
```

## static cleanCollection

```ts
static cleanCollection(collectionName: string, mongoSettings?: {
     id: string;
     url: string;
     connectionOptions: import("mongoose").ConnectOptions;
 }[]): Promise<void>;
```
