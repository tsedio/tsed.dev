---
title: ValidationError from @tsed/platform-params
description: api documentation of ValidationError from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation ValidationError class
---
# ValidationError - @tsed/platform-params

## Usage

```typescript
import { ValidationError } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/errors/ValidationError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/errors/ValidationError.ts#L0-L0).

## Overview

```ts
class ValidationError extends BadRequest {
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
