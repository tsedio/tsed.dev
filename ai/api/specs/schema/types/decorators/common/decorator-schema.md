---
title: Schema from @tsed/schema
description: api documentation of Schema from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Schema decorator
---
# Schema - @tsed/schema

## Usage

```typescript
import { Schema } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/schema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/schema.ts#L0-L0).

## Overview

```ts
function Schema<T>(partialSchema: Partial<JsonSchemaObject> | JsonSchema<T>): (...args: any[]) => any;
```

<!-- Description -->

## Description

Write data formatted to JsonSchema.

## Example

```ts
@Schema({title: "test"})
class Model {
   @Schema({formatMinimum: "1987-10-24"})
   @Format("date")
   birthDate: Date
}
```

Will produce:

```json
{
  "type": "object",
  "title": "test",
  "properties": {
    "birthdate": {
       "type": "string",
       "format": "date",
       "formatMinimum": "1987-10-24"
    }
  }
}
```
