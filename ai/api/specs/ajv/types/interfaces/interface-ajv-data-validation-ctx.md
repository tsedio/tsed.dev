---
title: AjvDataValidationCtx from @tsed/ajv
description: api documentation of AjvDataValidationCtx from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation AjvDataValidationCtx interface
---
# AjvDataValidationCtx - @tsed/ajv

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

<!-- Members -->

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
