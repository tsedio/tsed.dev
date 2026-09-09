---
title: JsonMapperCallback from @tsed/json-mapper
description: api documentation of JsonMapperCallback from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonMapperCallback type
---
# JsonMapperCallback - @tsed/json-mapper

## Usage

```typescript
import { JsonMapperCallback } from "@tsed/specs/json-mapper/src/domain/JsonMapperCompiler";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
type JsonMapperCallback<Options> = (input: any, options?: Options) => any;
```

<!-- Description -->

## Description

Signature exposed by compiled mappers. They accept an input value plus contextual options
and return the serialized/deserialized result.
