---
url: /api/orm/mongoose/types/decorators/decorator-schema.md
description: api documentation of Schema from @tsed/mongoose
---

## Usage

```typescript
import { Schema } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/schema.ts#L0-L0).

## Overview

```ts
function Schema(options?: MongooseSchemaOptions): (target: any) => void;
export function Schema(definition: SchemaTypeOptions<any>): Function;
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
