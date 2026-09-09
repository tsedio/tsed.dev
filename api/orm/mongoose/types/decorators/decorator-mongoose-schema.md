---
url: /api/orm/mongoose/types/decorators/decorator-mongoose-schema.md
description: api documentation of MongooseSchema from @tsed/mongoose
---

## Usage

```typescript
import { MongooseSchema } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/schema.ts#L0-L0).

## Overview

```ts
function MongooseSchema(options?: MongooseSchemaOptions): (target: any) => void;
export function MongooseSchema(definition: SchemaTypeOptions<any>): Function;
```

## Description

Define a class as a Mongoose Schema ready to be used to compose other schemes and models.

### Example

```typescript
@MongooseSchema()
export class EventSchema {
  @Property()
  field: string;
}
```

### Options

* `schemaOptions` (mongoose.SchemaOptions): Option to configure the schema behavior.
