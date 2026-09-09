---
url: /api/orm/mongoose/types/decorators/decorator-ref.md
description: api documentation of Ref from @tsed/mongoose
---

## Usage

```typescript
import { Ref } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/ref.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/ref.ts#L0-L0).

## Overview

```ts
function Ref(model: string | (() => Type) | any, options?: RefOptions | MongooseSchemaTypes): PropertyDecorator;
export namespace Ref {
    var $schema: {
        skip: boolean;
    };
}
export type Ref<T> = T | string;
```

## Description

Define a property as mongoose reference to other Model (decorated with @Model).

### Example

```typescript

@Model()
class FooModel {

   @Ref(Foo2Model)
   field: Ref<Foo2Model>

   @Ref(Foo2Model)
   list: Ref<Foo2Model>[]
}

@Model()
class Foo2Model {
}
```

## var $schema

```ts
var $schema: {
     skip: boolean;
 };
```
