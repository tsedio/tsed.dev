---
title: MikroOrmRegistry from @tsed/mikro-orm
description: api documentation of MikroOrmRegistry from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation MikroOrmRegistry class
---
# MikroOrmRegistry - @tsed/mikro-orm

## Usage

```typescript
import { MikroOrmRegistry } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/services/MikroOrmRegistry.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/services/MikroOrmRegistry.ts#L0-L0).

## Overview

```ts
class MikroOrmRegistry {
    
    
    constructor(logger: Logger, mikroOrmFactory: MikroOrmFactory);
    register<T extends DatabaseDriver>(options: Options<T>): Promise<MikroORM>;
    get(contextName?: string): MikroORM | undefined;
    has(contextName?: string): boolean;
    values(): IterableIterator<MikroORM>;
    clear(): Promise<void>;
}
```

<!-- Members -->

## register

```ts
register<T extends DatabaseDriver>(options: Options<T>): Promise<MikroORM>;
```

## get

```ts
get(contextName?: string): MikroORM | undefined;
```

## has

```ts
has(contextName?: string): boolean;
```

## values

```ts
values(): IterableIterator<MikroORM>;
```

## clear

```ts
clear(): Promise<void>;
```
