---
title: AjvValidationError from @tsed/ajv
description: api documentation of AjvValidationError from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation AjvValidationError class
---
# AjvValidationError - @tsed/ajv

## Usage

```typescript
import { AjvValidationError } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/errors/AjvValidationError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/errors/AjvValidationError.ts#L0-L0).

## Overview

```ts
class AjvValidationError extends BadRequest {
    name: string;
    errors: any[];
    constructor(message: string, errors?: any[]);
}
```

<!-- Members -->

## name

```ts
name: string;
```

## errors

```ts
errors: any[];
```
