---
title: map from @tsed/schema
description: api documentation of map from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation map function
---
# map - @tsed/schema

## Usage

```typescript
import { map } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/collection.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/collection.ts#L0-L0).

## Overview

```ts
function map(): JsonSchema<Record<string, any>>;
export function map<V>(value: JsonSchema<V>): JsonSchema<Map<string, V>>;
```

<!-- Description -->

## Description

Declare a new object model with `additionalProperties: true` (map-like). If a value schema is provided, it is used
as `additionalProperties` and its type will be inferred.

```json
{ "type": "object", "additionalProperties": true }
```

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
