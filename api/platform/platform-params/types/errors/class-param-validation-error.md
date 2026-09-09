---
url: /api/platform/platform-params/types/errors/class-param-validation-error.md
description: api documentation of ParamValidationError from @tsed/platform-params
---

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
