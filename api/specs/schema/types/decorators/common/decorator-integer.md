---
url: /api/specs/schema/types/decorators/common/decorator-integer.md
description: api documentation of Integer from @tsed/schema
---

## Usage

```typescript
import { Integer } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/integer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/integer.ts#L0-L0).

## Overview

```ts
function Integer(): (...args: any[]) => any;
```

## Description

Set integer type.

::: warning
For v6 user, use @@Integer@@ from @tsed/schema instead of @@Integer@@ from @tsed/platform-http.
:::

## Example

```typescript
class Model {
   @Integer()
   property: number;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "integer"
    }
  }
}
```

### With array of multiple types

```typescript
class Model {
   @Integer()
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
         "type": "integer"
      }
    }
  }
}
```
