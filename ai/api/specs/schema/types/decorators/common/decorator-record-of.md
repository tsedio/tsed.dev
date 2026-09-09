---
title: RecordOf from @tsed/schema
description: api documentation of RecordOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation RecordOf decorator
---
# RecordOf - @tsed/schema

## Usage

```typescript
import { RecordOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/recordOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/recordOf.ts#L0-L0).

## Overview

```ts
function RecordOf(model: any, ...keys: string[]): (...args: any[]) => any;
```

<!-- Description -->

## Description

Constructs a json schema object type whose property keys are keys and whose property values are type.

## Example

```typescript
type keys = 'one' | 'two';

class Part {
  prop: string;
}

type Parts = Record<keys, Part>;

class Test {
  @RecordOf(Part, 'one', 'two')
  parts: Parts;
}
```

Will produce:

```json
{
    "type": "object",
    "properties": {
        "one": {
            "$ref": "#/components/schemas/Part"
        },
        "two": {
            "$ref": "#/components/schemas/Part"
        },
    },
}
```
