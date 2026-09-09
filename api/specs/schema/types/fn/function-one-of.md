---
url: /api/specs/schema/types/fn/function-one-of.md
description: api documentation of oneOf from @tsed/schema
---

## Usage

```typescript
import { oneOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oneOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oneOf.ts#L0-L0).

## Overview

```ts
function oneOf<S extends Array<AnyJsonSchema | null>>(...oneOf: S): JsonSchema<Infer<S[number]>>;
```

## Description

See https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.28

See @@JsonSchema@@ to discover available methods.
