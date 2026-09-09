---
title: MikroOrmFactory from @tsed/mikro-orm
description: api documentation of MikroOrmFactory from @tsed/mikro-orm
meta:
 - name: keywords
   description: api typescript node.js documentation MikroOrmFactory class
---
# MikroOrmFactory - @tsed/mikro-orm

## Usage

```typescript
import { MikroOrmFactory } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/services/MikroOrmFactory.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/services/MikroOrmFactory.ts#L0-L0).

## Overview

```ts
class MikroOrmFactory {
    constructor(context: MikroOrmContext);
    create(options: Options): Promise<MikroORM>;
}
```

<!-- Members -->

## create

```ts
create(options: Options): Promise<MikroORM>;
```
