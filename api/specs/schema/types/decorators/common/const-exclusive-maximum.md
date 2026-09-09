---
url: /api/specs/schema/types/decorators/common/const-exclusive-maximum.md
description: api documentation of ExclusiveMaximum from @tsed/schema
---

## Usage

```typescript
import { ExclusiveMaximum } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/exclusiveMaximum.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/exclusiveMaximum.ts#L0-L0).

## Overview

```ts
const ExclusiveMaximum: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(maximum: number, exclusiveMaximum?: boolean) => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(maximum: number, exclusive?: boolean) => (...args: any[]) => any>>;
```

## Description

The value of `exclusiveMaximum` MUST be number, representing an exclusive upper limit for a numeric instance.

If the instance is a number, then the instance is valid only if it has a value strictly less than (not equal to) `exclusiveMaximum`.

::: warning
For v6 user, use @@ExclusiveMaximum@@ from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @ExclusiveMaximum(10)
   property: number;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "number",
      "exclusiveMaximum": 10
    }
  }
}
```

### With array type

```typescript
class Model {
   @ExclusiveMaximum(10)
   @CollectionOf(Number)
   property: number[];
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
         "type": "number",
         "exclusiveMaximum": 10
      }
    }
  }
}
```
