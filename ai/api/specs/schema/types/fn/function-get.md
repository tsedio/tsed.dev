---
title: get from @tsed/schema
description: api documentation of get from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation get function
---
# get - @tsed/schema

## Usage

```typescript
import { get } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/from.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/from.ts#L0-L0).

## Overview

```ts
function get(type: Type<any>): JsonSchema<import("json-schema").JSONSchema7Type>;
```

-   **type** (`Type<any>`): The class owning the shared schema metadata.

<!-- Description -->

## Description

Get the shared schema instance attached to a class.

Contrary to [from](/ai/api/specs/schema/types/fn/function-from.md), `get()` returns the schema stored in the class metadata.
Mutating the returned instance updates the class-level schema definition and
therefore affects every consumer of that class schema.

This helper is intended for low-level or internal patching scenarios where the
source schema must be updated in place.

```typescript
get(UserModel).properties({
  name: string()
});
```
