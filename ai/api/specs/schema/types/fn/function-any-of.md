---
title: anyOf from @tsed/schema
description: api documentation of anyOf from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation anyOf function
---
# anyOf - @tsed/schema

## Usage

```typescript
import { anyOf } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/anyOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/anyOf.ts#L0-L0).

## Overview

```ts
function anyOf<S extends Array<AnyJsonSchema | null>>(...anyOf: S): JsonSchema<Infer<S[number]>>;
```

<!-- Description -->

## Description

See https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.27

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
