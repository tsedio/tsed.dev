---
title: ParamValidationError from @tsed/platform-params
description: api documentation of ParamValidationError from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation ParamValidationError class
---
# ParamValidationError - @tsed/platform-params

## Usage

```typescript
import { ParamValidationError } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/errors/ParamValidationError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/errors/ParamValidationError.ts#L0-L0).

## Overview

```ts
class ParamValidationError extends BadRequest {
    name: string;
    dataPath: string;
    requestType: string;
    static from(metadata: JsonParameterStore, origin?: any): any;
}
```

<!-- Members -->

## name

```ts
name: string;
```

## dataPath

```ts
dataPath: string;
```

## requestType

```ts
requestType: string;
```

## static from

```ts
static from(metadata: JsonParameterStore, origin?: any): any;
```
