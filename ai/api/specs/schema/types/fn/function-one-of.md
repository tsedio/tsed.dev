---
title: oneOf from @tsed/schema
description: api documentation of oneOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation oneOf function
---
# oneOf - @tsed/schema

## Usage

```typescript
import { oneOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/oneOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/oneOf.ts#L0-L0).

## Overview

```ts
function oneOf<S extends Array<AnyJsonSchema | null>>(...oneOf: S): JsonSchema<Infer<S[number]>>;
```

<!-- Description -->

## Description

See https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.28

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
