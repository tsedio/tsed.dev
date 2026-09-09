---
title: allOf from @tsed/schema
description: api documentation of allOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation allOf function
---
# allOf - @tsed/schema

## Usage

```typescript
import { allOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/allOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/allOf.ts#L0-L0).

## Overview

```ts
function allOf<S extends Array<AnyJsonSchema | null>>(...allOf: S): JsonSchema<UnionToIntersection<Infer<S[number]>>>;
```

<!-- Description -->

## Description

See https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.26

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
