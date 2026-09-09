---
title: DateTime from @tsed/schema
description: api documentation of DateTime from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation DateTime const
---
# DateTime - @tsed/schema

## Usage

```typescript
import { DateTime } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/format.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/format.ts#L0-L0).

## Overview

```ts
const DateTime: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<() => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(format: JsonFormatTypes | ValueOf<JsonFormatTypes>) => (...args: any[]) => any>>;
```

<!-- Description -->

## Description

Apply a date-time validation on property.

## Example

### With primitive type

```typescript
class Model {
   @DateTime()
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
      "format": "date-time"
    }
  }
}
```

### With array type

```typescript
class Model {
   @DateTime()
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
         "format": "date-time"
      }
    }
  }
}
```
