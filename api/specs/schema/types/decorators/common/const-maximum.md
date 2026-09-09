---
url: /api/specs/schema/types/decorators/common/const-maximum.md
description: api documentation of Maximum from @tsed/schema
---

## Usage

```typescript
import { Maximum } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/maximum.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/maximum.ts#L0-L0).

## Overview

```ts
const Maximum: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(maximum: number, exclusive?: boolean) => (...args: any[]) => any>;
```

## Description

The value of `maximum` MUST be a number, representing an inclusive upper limit for a numeric instance.

If the instance is a number, then this keyword validates only if the instance is less than or exactly equal to `maximum`.

::: warning
For v6 user, use @@Maximum@@ from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @Maximum(10)
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
      "maximum": 10
    }
  }
}
```

### With array type

```typescript
class Model {
   @Maximum(10)
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
         "maximum": 10
      }
    }
  }
}
```
