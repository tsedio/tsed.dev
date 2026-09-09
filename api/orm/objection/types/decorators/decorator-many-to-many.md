---
url: /api/orm/objection/types/decorators/decorator-many-to-many.md
description: api documentation of ManyToMany from @tsed/objection
---

## Usage

```typescript
import { ManyToMany } from "@tsed/objection";
```

> See [/packages/orm/objection/src/decorators/manyToMany.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/objection/src/decorators/manyToMany.ts#L0-L0).

## Overview

```ts
function ManyToMany(type: ModelClassSpecifier, opts?: RelationshipOptsWithThrough): PropertyDecorator;
```
