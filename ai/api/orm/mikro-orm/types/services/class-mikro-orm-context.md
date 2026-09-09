---
title: MikroOrmContext from @tsed/mikro-orm
description: api documentation of MikroOrmContext from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation MikroOrmContext class
---
# MikroOrmContext - @tsed/mikro-orm

## Usage

```typescript
import { MikroOrmContext } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/services/MikroOrmContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/services/MikroOrmContext.ts#L0-L0).

## Overview

```ts
class MikroOrmContext {
    run(managers: EntityManager[], task: (...args: unknown[]) => unknown): Promise<unknown>;
    get(contextName?: string): EntityManager | undefined;
    has(contextName?: string): boolean;
}
```

<!-- Members -->

## run

```ts
run(managers: EntityManager[], task: (...args: unknown[]) => unknown): Promise<unknown>;
```

## get

```ts
get(contextName?: string): EntityManager | undefined;
```

## has

```ts
has(contextName?: string): boolean;
```
