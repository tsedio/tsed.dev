---
url: /api/specs/schema/types/fn/function-set.md
description: api documentation of set from @tsed/schema
---

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

## Description

Declare a new array model representing a Set with `uniqueItems: true`. If an item schema is provided, it will be set
as `items` and its type will be inferred as `Set<I>`.

```json
{ "type": "array", "uniqueItems": true }
```

See @@JsonSchema@@ to discover available methods.
