---
title: RequiredValidationError from @tsed/platform-params
description: api documentation of RequiredValidationError from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation RequiredValidationError class
---
# RequiredValidationError - @tsed/platform-params

## Usage

```typescript
import { RequiredValidationError } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/errors/RequiredValidationError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/errors/RequiredValidationError.ts#L0-L0).

## Overview

```ts
class RequiredValidationError extends ValidationError {
    name: string;
    static from(metadata: JsonParameterStore): RequiredValidationError;
}
```

<!-- Members -->

## name

```ts
name: string;
```

## static from

```ts
static from(metadata: JsonParameterStore): RequiredValidationError;
```
