---
title: ExclusiveMinimum from @tsed/schema
description: api documentation of ExclusiveMinimum from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation ExclusiveMinimum const
---
# ExclusiveMinimum - @tsed/schema

## Usage

```typescript
import { ExclusiveMinimum } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/exclusiveMinimum.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/exclusiveMinimum.ts#L0-L0).

## Overview

```ts
const ExclusiveMinimum: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(minimum: number, exclusiveMinimum?: boolean) => import("../../utils/withErrorMsg.js").ErrorChainedMethods<(minimum: number, exclusive?: boolean) => (...args: any[]) => any>>;
```

<!-- Description -->

## Description

The value of `exclusiveMinimum` MUST be number, representing an exclusive upper limit for a numeric instance.

If the instance is a number, then the instance is valid only if it has a value strictly greater than (not equal to) `exclusiveMinimum`.

::: warning
For v6 user, use [ExclusiveMinimum](/ai/api/specs/schema/types/decorators/common/const-exclusive-minimum.md) from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @ExclusiveMinimum(10)
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
      "exclusiveMinimum": 10
    }
  }
}
```

### With array type

```typescript
class Model {
   @ExclusiveMinimum(10)
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
         "exclusiveMinimum": 10
      }
    }
  }
}
```
