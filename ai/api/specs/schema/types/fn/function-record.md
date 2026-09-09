---
title: record from @tsed/schema
description: api documentation of record from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation record function
---
# record - @tsed/schema

## Usage

```typescript
import { record } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/collection.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/collection.ts#L0-L0).

## Overview

```ts
function record<K extends string | number | symbol = string, V = any>(): JsonSchema<Record<K, V>>;
export function record<V>(value: JsonSchema<V>): JsonSchema<Record<string, V>>;
```

<!-- Description -->

## Description

Declare a new object model with `additionalProperties: true` (record-like). If a value schema is provided, it is used
as `additionalProperties` and its type will be inferred as `Record<string, V>`.

```json
{ "type": "object", "additionalProperties": true }
```

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
