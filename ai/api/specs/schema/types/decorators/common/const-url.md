---
title: Url from @tsed/schema
description: api documentation of Url from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Url const
---
# Url - @tsed/schema

## Usage

```typescript
import { Url } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/format.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/format.ts#L0-L0).

## Overview

```ts
const Url: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<() => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(format: JsonFormatTypes | ValueOf<JsonFormatTypes>) => (...args: any[]) => any>>;
```

<!-- Description -->

## Description

Apply a url validation on property.

## Example

### With primitive type

```typescript
class Model {
   @Url()
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
      "format": "url"
    }
  }
}
```

### With array type

```typescript
class Model {
   @Url()
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
         "format": "url"
      }
    }
  }
}
```
