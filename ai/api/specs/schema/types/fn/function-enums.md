---
title: enums from @tsed/schema
description: api documentation of enums from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation enums function
---
# enums - @tsed/schema

## Usage

```typescript
import { enums } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/enums.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/enums.ts#L0-L0).

## Overview

```ts
function enums<E extends Record<string, string | number>>(e: E): JsonSchema<E[keyof E]>;
export function enums<T extends readonly (string | number)[]>(e: T): JsonSchema<T[number]>;
```

<!-- Description -->

## Description

Declare a new enum model.

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
