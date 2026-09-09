---
url: /api/orm/mikro-orm/types/services/class-mikro-orm-context.md
description: api documentation of MikroOrmContext from @tsed/mikro-orm
---

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
