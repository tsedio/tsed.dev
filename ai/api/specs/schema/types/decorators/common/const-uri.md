---
title: Uri from @tsed/schema
description: api documentation of Uri from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Uri const
---
# Uri - @tsed/schema

## Usage

```typescript
import { Uri } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/format.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/format.ts#L0-L0).

## Overview

```ts
const Uri: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<() => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(format: JsonFormatTypes | ValueOf<JsonFormatTypes>) => (...args: any[]) => any>>;
```

<!-- Description -->

## Description

Apply a uri validation on property.

## Example

### With primitive type

```typescript
class Model {
   @Uri()
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
      "format": "uri"
    }
  }
}
```

### With array type

```typescript
class Model {
   @Uri()
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
         "format": "uri"
      }
    }
  }
}
```
