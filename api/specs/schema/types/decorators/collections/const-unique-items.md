---
url: /api/specs/schema/types/decorators/collections/const-unique-items.md
description: api documentation of UniqueItems from @tsed/schema
---

## Usage

```typescript
import { UniqueItems } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/collections/uniqueItems.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/collections/uniqueItems.ts#L0-L0).

## Overview

```ts
const UniqueItems: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(uniqueItems?: boolean) => (...args: any[]) => any>;
```

## Description

If this keyword has boolean value false, the instance validates successfully. If it has boolean value true, the instance validates successfully if all of its elements are unique.

::: warning
For v6 user, use @@UniqueItems@@ from @tsed/schema instead of @tsed/platform-http.
:::

## Example

```typescript
class Model {
   @UniqueItems()  // default true
   property: number[];
}
```

```typescript
class Model {
   @CollectionOf(String)
   @UniqueItems()
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
      "uniqueItems": true,
      "items": {
        "type": "string"
      }
    }
  }
}
```
