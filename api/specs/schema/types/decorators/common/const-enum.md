---
url: /api/specs/schema/types/decorators/common/const-enum.md
description: api documentation of Enum from @tsed/schema
---

## Usage

```typescript
import { Enum } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/enum.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/enum.ts#L0-L0).

## Overview

```ts
const Enum: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<typeof EnumFn>;
```

## Description

The enum keyword is used to restrict a value to a fixed set of values.
It must be an array with at least one element, where each element is unique.

Elements in the array might be of any value, including null.

::: warning
For v6 user, use @@Enum@@ from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @Enum("value1", "value2")
   property: "value1" | "value2";
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "enum": ["value1", "value2"]
    }
  }
}
```

### With array type

```typescript
class Model {
   @Enum("value1", "value2")
   property: ("value1" | "value2")[];
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "array",
      "items": {
         "type": "string",
         "enum": ["value1", "value2"]
      }
    }
  }
}
```

### With Typescript Enum

```typescript
enum SomeEnum {
   ENUM_1 = "enum1",
   ENUM_2 = "enum2"
}

class Model {
   @Enum(SomeEnum)
   property: SomeEnum;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
       "type": "string",
       "enum": ["enum1", "enum2"]
    }
  }
}
```
