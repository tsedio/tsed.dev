---
title: CastError from @tsed/json-mapper
description: api documentation of CastError from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation CastError class
---
# CastError - @tsed/json-mapper

## Usage

```typescript
import { CastError } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/components/PrimitiveMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/components/PrimitiveMapper.ts#L0-L0).

## Overview

```ts
class CastError extends Error {
    name: string;
    constructor(message: string);
}
```

<!-- Description -->

## Description

Error thrown when a primitive conversion cannot be performed safely.

<!-- Members -->

## name

```ts
name: string;
```
