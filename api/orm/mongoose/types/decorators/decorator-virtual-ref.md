---
url: /api/orm/mongoose/types/decorators/decorator-virtual-ref.md
description: api documentation of VirtualRef from @tsed/mongoose
---

## Usage

```typescript
import { VirtualRef } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/virtualRef.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/virtualRef.ts#L0-L0).

## Overview

```ts
function VirtualRef(ref: string, foreignField: string): Function;
export function VirtualRef(options: MongooseVirtualRefOptions): Function;
export function VirtualRef(options: string | MongooseVirtualRefOptions, foreignField?: string): Function;
export namespace VirtualRef {
    var $schema: {
        skip: boolean;
    };
}
export type VirtualRef<T> = T | null;
```

## Description

Define a property as mongoose virtual reference to other Model (decorated with @Model).

::: warning
To avoid circular dependencies, do not use the virtual reference model in
anything except a type declaration. Using the virtual reference model will prevent
typescript transpiler from stripping away the import statement and cause a circular
import in node.
:::

## var $schema

```ts
var $schema: {
     skip: boolean;
 };
```
