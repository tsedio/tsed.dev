---
url: /api/specs/schema/types/decorators/common/const-time-format.md
description: api documentation of TimeFormat from @tsed/schema
---

## Usage

```typescript
import { TimeFormat } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/format.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/format.ts#L0-L0).

## Overview

```ts
const TimeFormat: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<() => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(format: JsonFormatTypes | ValueOf<JsonFormatTypes>) => (...args: any[]) => any>>;
```

## Description

Apply a time validation on property.

## Example

### With primitive type

```typescript
class Model {
   @TimeFormat()
   property: string;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "format": "time"
    }
  }
}
```

### With array type

```typescript
class Model {
   @TimeFormat()
   @CollectionOf(String)
   property: string[];
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
         "format": "time"
      }
    }
  }
}
```
