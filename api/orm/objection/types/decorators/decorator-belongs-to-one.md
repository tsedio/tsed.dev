---
url: /api/orm/objection/types/decorators/decorator-belongs-to-one.md
description: api documentation of BelongsToOne from @tsed/objection
---

## Usage

```typescript
import { BelongsToOne } from "@tsed/objection";
```

> See [/packages/orm/objection/src/decorators/belongsToOne.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/objection/src/decorators/belongsToOne.ts#L0-L0).

## Overview

```ts
function BelongsToOne(type?: ModelClassSpecifier): PropertyDecorator;

export function BelongsToOne(opts?: RelationshipOptsWithoutThrough): PropertyDecorator;

export function BelongsToOne(type?: ModelClassSpecifier, opts?: RelationshipOptsWithoutThrough): PropertyDecorator;
```
