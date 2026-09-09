---
url: /api/orm/mongoose/types/decorators/decorator-dynamic-ref.md
description: api documentation of DynamicRef from @tsed/mongoose
---

## Usage

```typescript
import { DynamicRef } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/dynamicRef.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/dynamicRef.ts#L0-L0).

## Overview

```ts
function DynamicRef(refPath: string, ...types: Type<any>[]): PropertyDecorator;
export namespace DynamicRef {
    var $schema: {
        skip: boolean;
    };
}
export type DynamicRef<T> = T | string;
```

* **refPath** (`string`): the path to apply the correct model

* **types** (`Type<any>[]`): the classes to generate the correct json schema

## Description

Define a property as mongoose reference to other Model (decorated with @Model).

### Example

```typescript
@Model()
class FooModel {

   @DynamicRef('type')
   field: DynamicRef<OtherFooModel | OtherModel>

   @Enum(['OtherFooModel', 'OtherModel'])
   type: string
}

@Model()
class OtherFooModel {
}

@Model()
class OtherModel {
}
```

## var $schema

```ts
var $schema: {
     skip: boolean;
 };
```
