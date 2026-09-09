---
title: Min from @tsed/schema
description: api documentation of Min from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Min const
---
# Min - @tsed/schema

## Usage

```typescript
import { Min } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/minimum.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/minimum.ts#L0-L0).

## Overview

```ts
const Min: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(minimum: number, exclusive?: boolean) => (...args: any[]) => any>;
```

<!-- Description -->

## Description

The value of `minimum` MUST be a number, representing an inclusive upper limit for a numeric instance.

If the instance is a number, then this keyword validates only if the instance is greater than or exactly equal to `minimum`.

## Example

### With primitive type

```typescript
class Model {
   @Min(10)
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
   @Min(10)
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
