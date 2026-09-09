---
title: EntityMethods from @tsed/objection
description: api documentation of EntityMethods from @tsed/objection
meta:
 - name: keywords
   description: api typescript node.js documentation EntityMethods interface
---
# EntityMethods - @tsed/objection

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

<!-- Members -->

## readonly tableName

```ts
readonly tableName: string;
```
