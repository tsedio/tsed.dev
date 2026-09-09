---
title: PropsToShape from @tsed/schema
description: api documentation of PropsToShape from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation PropsToShape type
---
# PropsToShape - @tsed/schema

## Usage

```typescript
import { PropsToShape } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type PropsToShape<P extends Record<string, JsonSchema<any>>> = {
    [K in keyof P]: Infer<P[K]>;
};
```

<!-- Description -->

## Description

Maps an object of JsonSchema properties to a concrete TypeScript type.

Converts a record of JsonSchema properties into a TypeScript type where each
property has the inferred type from its corresponding schema.

### Usage

```typescript
const properties = {
  name: string(),
  age: number(),
  email: string().format("email")
};

type Shape = PropsToShape<typeof properties>;
// Result: { name: string; age: number; email: string }
```

<!-- Members -->

## \[K in keyof P]

```ts
[K in keyof P]: Infer<P[K]>;
```
