---
url: /api/specs/schema/types/fn/function-any.md
description: api documentation of any from @tsed/schema
---

## Usage

```typescript
import { any } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/any.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/any.ts#L0-L0).

## Overview

```ts
function any(): JsonSchema<any>;
export function any<S extends Array<JsonSchema<any>>>(...types: S): JsonSchema<{
    [K in keyof S]: Infer<S[K]>;
}>;
```

## Description

Declare a model with any type (By default: `integer`, `number`, `string`, `boolean`, `array`, `object`, `null`)

See @@JsonSchema@@ to discover available methods.

## \[K in keyof S]

```ts
[K in keyof S]: Infer<S[K]>;
```
