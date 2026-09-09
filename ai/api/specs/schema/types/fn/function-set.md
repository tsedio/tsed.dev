---
title: set from @tsed/schema
description: api documentation of set from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation set function
---
# set - @tsed/schema

## Usage

```typescript
import { set } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/collection.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/collection.ts#L0-L0).

## Overview

```ts
function set(): JsonSchema<Set<any>>;
export function set<I>(item: JsonSchema<I>): JsonSchema<Set<I>>;
```

<!-- Description -->

## Description

Declare a new array model representing a Set with `uniqueItems: true`. If an item schema is provided, it will be set
as `items` and its type will be inferred as `Set<I>`.

```json
{ "type": "array", "uniqueItems": true }
```

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
