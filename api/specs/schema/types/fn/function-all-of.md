---
url: /api/specs/schema/types/fn/function-all-of.md
description: api documentation of allOf from @tsed/schema
---

## Usage

```typescript
import { allOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/allOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/allOf.ts#L0-L0).

## Overview

```ts
function allOf<S extends Array<AnyJsonSchema | null>>(...allOf: S): JsonSchema<UnionToIntersection<Infer<S[number]>>>;
```

## Description

See https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.26

See @@JsonSchema@@ to discover available methods.
