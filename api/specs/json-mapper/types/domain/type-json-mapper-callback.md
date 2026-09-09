---
url: /api/specs/json-mapper/types/domain/type-json-mapper-callback.md
description: api documentation of JsonMapperCallback from @tsed/json-mapper
---

## Usage

```typescript
import { JsonMapperCallback } from "@tsed/specs/json-mapper/src/domain/JsonMapperCompiler";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
type JsonMapperCallback<Options> = (input: any, options?: Options) => any;
```

## Description

Signature exposed by compiled mappers. They accept an input value plus contextual options
and return the serialized/deserialized result.
