---
url: /api/specs/schema/types/decorators/common/const-minimum.md
description: api documentation of Minimum from @tsed/schema
---

## Usage

```typescript
import { Minimum } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/minimum.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/minimum.ts#L0-L0).

## Overview

```ts
const Minimum: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(minimum: number, exclusive?: boolean) => (...args: any[]) => any>;
```

## Description

The value of `minimum` MUST be a number, representing an inclusive upper limit for a numeric instance.

If the instance is a number, then this keyword validates only if the instance is greater than or exactly equal to `minimum`.

::: warning
This decorator will be removed in v7.
For v6 user, use @@Minimum@@ from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @Minimum(10)
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
      "minimum": 10
    }
  }
}
```

### With array type

```typescript
class Model {
   @Minimum(10)
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
         "minimum": 10
      }
    }
  }
}
```
