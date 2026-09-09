---
url: /api/orm/mikro-orm/types/class-mikro-orm-module.md
description: api documentation of MikroOrmModule from @tsed/mikro-orm
---

## Usage

```typescript
import { MikroOrmModule } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/MikroOrmModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/MikroOrmModule.ts#L0-L0).

## Overview

```ts
class MikroOrmModule implements OnDestroy, OnInit, AlterRunInContext {
    
    
    constructor(subscribers: EventSubscriber[]);
    $onInit(): Promise<void>;
    $onDestroy(): Promise<void>;
    $alterRunInContext(next: (...args: unknown[]) => unknown): () => unknown | Promise<() => unknown>;
    
    
}
```

## Description

The ORM configuration, entity metadata.
If you omit the `options` parameter, your CLI config will be used.

## $onInit

```ts
$onInit(): Promise<void>;
```

## $onDestroy

```ts
$onDestroy(): Promise<void>;
```

## $alterRunInContext

```ts
$alterRunInContext(next: (...args: unknown[]) => unknown): () => unknown | Promise<() => unknown>;
```
