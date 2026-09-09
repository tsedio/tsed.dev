---
url: /api/specs/schema/types/fn/function-array.md
description: api documentation of array from @tsed/schema
---

## Usage

```typescript
import { array } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/collection.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/collection.ts#L0-L0).

## Overview

```ts
function array(): JsonSchema<any[]>;
export function array<I>(item: JsonSchema<I>): JsonSchema<I[]>;
```

## Description

Declare a new array model. If an item schema is provided, it will be set as `items` and its type will be inferred.

```json
{ "type": "array" }
```

See @@JsonSchema@@ to discover available methods.
