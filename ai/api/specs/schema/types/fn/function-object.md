---
title: object from @tsed/schema
description: api documentation of object from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation object function
---
# object - @tsed/schema

## Usage

```typescript
import { object } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/object.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/object.ts#L0-L0).

## Overview

```ts
function object<P extends Record<string, JsonSchema<any>> = Record<string, JsonSchema<any>>>(properties?: P): JsonSchema<import("@tsed/schema").PropsToShape<P>>;
```

-   **properties** (`P`): Optional. - An object containing property definitions where each value is a JsonSchema

<!-- Description -->

## Description

Declare a new object model.

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.

### Example

```typescript
const userSchema = object({
  name: string(),
  age: number()
});
```
