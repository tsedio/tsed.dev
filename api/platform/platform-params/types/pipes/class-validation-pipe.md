---
url: /api/platform/platform-params/types/pipes/class-validation-pipe.md
description: api documentation of ValidationPipe from @tsed/platform-params
---

## Usage

```typescript
import { ValidationPipe } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/pipes/ValidationPipe.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/pipes/ValidationPipe.ts#L0-L0).

## Overview

```ts
class ValidationPipe implements PipeMethods {
    constructor();
    coerceTypes(value: any, metadata: JsonParameterStore): any;
    skip(value: any, metadata: JsonParameterStore): boolean;
    transform(value: any, metadata: JsonParameterStore): Promise<any>;
    protected checkIsRequired(value: any, metadata: JsonParameterStore): boolean;
}
```

## coerceTypes

```ts
coerceTypes(value: any, metadata: JsonParameterStore): any;
```

## skip

```ts
skip(value: any, metadata: JsonParameterStore): boolean;
```

## transform

```ts
transform(value: any, metadata: JsonParameterStore): Promise<any>;
```

## protected checkIsRequired

```ts
protected checkIsRequired(value: any, metadata: JsonParameterStore): boolean;
```
