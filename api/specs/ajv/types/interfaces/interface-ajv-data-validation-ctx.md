---
url: /api/specs/ajv/types/interfaces/interface-ajv-data-validation-ctx.md
description: api documentation of AjvDataValidationCtx from @tsed/ajv
---

## Usage

```typescript
import { AjvDataValidationCtx } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/KeywordMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/KeywordMethods.ts#L0-L0).

## Overview

```ts
interface AjvDataValidationCtx<T extends string | number = string | number> {
    dataPath: string;
    parentData: {
        [K in T]: any;
    };
    parentDataProperty: T;
    rootData: Record<string, any> | any[];
    dynamicAnchors: {
        [Ref in string]?: ValidateFunction;
    };
}
```

## dataPath

```ts
dataPath: string;
```

## parentData

```ts
parentData: {
     [K in T]: any;
 };
```

## parentDataProperty

```ts
parentDataProperty: T;
```

## rootData

```ts
rootData: Record<string, any> | any[];
```

## dynamicAnchors

```ts
dynamicAnchors: {
     [Ref in string]?: ValidateFunction;
 };
```
