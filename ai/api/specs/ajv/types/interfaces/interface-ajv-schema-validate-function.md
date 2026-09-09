---
title: AjvSchemaValidateFunction from @tsed/ajv
description: api documentation of AjvSchemaValidateFunction from @tsed/ajv
meta:
 - name: keywords
   description: api typescript node.js documentation AjvSchemaValidateFunction interface
---
# AjvSchemaValidateFunction - @tsed/ajv

## Usage

```typescript
import { AjvSchemaValidateFunction } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/KeywordMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/KeywordMethods.ts#L0-L0).

## Overview

```ts
interface AjvSchemaValidateFunction {
    (schema: any, data: any, parentSchema?: AnySchemaObject, dataCxt?: AjvDataValidationCtx): boolean | Promise<any>;
}
```

<!-- Members -->

##

```ts
(schema: any, data: any, parentSchema?: AnySchemaObject, dataCxt?: AjvDataValidationCtx): boolean | Promise<any>;
```
