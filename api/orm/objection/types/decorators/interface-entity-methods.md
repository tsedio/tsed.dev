---
url: /api/orm/objection/types/decorators/interface-entity-methods.md
description: api documentation of EntityMethods from @tsed/objection
---

## Usage

```typescript
import { EntityMethods } from "@tsed/objection";
```

> See [/packages/orm/objection/src/decorators/entity.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/objection/src/decorators/entity.ts#L0-L0).

## Overview

```ts
interface EntityMethods<T> extends Type<T> {
    readonly tableName: string;
}
```

## readonly tableName

```ts
readonly tableName: string;
```
