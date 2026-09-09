---
url: /api/specs/schema/types/domain/type-infer.md
description: api documentation of Infer from @tsed/schema
---

## Usage

```typescript
import { Infer } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type Infer<S> = S extends JsonSchema<infer T> ? T : never;
```

## Description

Extracts the inferred TypeScript type from a JsonSchema.

This utility type enables type-safe schema usage by extracting the type parameter
from JsonSchema instances.

### Usage

```typescript
const userSchema = s.object();
type User = Infer<typeof userSchema>; // Extracts the type
```
