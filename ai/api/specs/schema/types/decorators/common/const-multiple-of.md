---
title: MultipleOf from @tsed/schema
description: api documentation of MultipleOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation MultipleOf const
---
# MultipleOf - @tsed/schema

## Usage

```typescript
import { MultipleOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/multipleOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/multipleOf.ts#L0-L0).

## Overview

```ts
const MultipleOf: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(multipleOf: number) => (...args: any[]) => any>;
```

<!-- Description -->

## Description

A numeric instance is valid only if division by this keyword's value results in an integer.

::: warning
The value of `multipleOf` MUST be a number, strictly greater than 0.
:::

::: warning
For v6 user, use [MultipleOf](/ai/api/specs/schema/types/decorators/common/const-multiple-of.md) from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @MultipleOf(2)
   property: Number;
}
```

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "number",
      "multipleOf": 2
    }
  }
}
```

### With array type

```typescript
class Model {
   @CollectionOf(number)
   @MultipleOf(2)
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
         "multipleOf": 2
      }
    }
  }
}
```
