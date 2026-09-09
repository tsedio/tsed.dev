---
title: any from @tsed/schema
description: api documentation of any from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation any function
---
# any - @tsed/schema

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

<!-- Description -->

## Description

Declare a model with any type (By default: `integer`, `number`, `string`, `boolean`, `array`, `object`, `null`)

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.

<!-- Members -->

## \[K in keyof S]

```ts
[K in keyof S]: Infer<S[K]>;
```
