---
url: /api/platform/platform-params/types/pipes/class-parse-expression-pipe.md
description: api documentation of ParseExpressionPipe from @tsed/platform-params
---

## Usage

```typescript
import { ParseExpressionPipe } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/pipes/ParseExpressionPipe.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/pipes/ParseExpressionPipe.ts#L0-L0).

## Overview

```ts
class ParseExpressionPipe implements PipeMethods {
    transform(scope: PlatformParamsScope, param: JsonParameterStore): any;
    protected getKey(param: JsonParameterStore): string;
}
```

## transform

```ts
transform(scope: PlatformParamsScope, param: JsonParameterStore): any;
```

## protected getKey

```ts
protected getKey(param: JsonParameterStore): string;
```
