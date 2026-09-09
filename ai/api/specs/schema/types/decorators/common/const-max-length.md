---
title: MaxLength from @tsed/schema
description: api documentation of MaxLength from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation MaxLength const
---
# MaxLength - @tsed/schema

## Usage

```typescript
import { MaxLength } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/maxLength.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/maxLength.ts#L0-L0).

## Overview

```ts
const MaxLength: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(maxLength: number) => (...args: any[]) => any>;
```

<!-- Description -->

## Description

A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword.

The length of a string instance is defined as the number of its characters as defined by [RFC 7159](http://json-schema.org/latest/json-schema-validation.html#RFC7159).

::: warning
The value of maxLength MUST be a non-negative integer.
:::

::: tip
Omitting this keyword has the same behavior as a value of 0.
:::

::: warning
For v6 user, use [MaxLength](/ai/api/specs/schema/types/decorators/common/const-max-length.md) from @tsed/schema instead of @tsed/platform-http.
:::

## Example

### With primitive type

```typescript
class Model {
   @MaxLength(10)
   property: number;
}
```

Will produce:

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "maxLength": 10
    }
  }
}
```

### With array type

```typescript
class Model {
   @MaxLength(10)
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
         "maxLength": 10
      }
    }
  }
}
```
