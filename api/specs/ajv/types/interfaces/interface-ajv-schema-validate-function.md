---
url: /api/specs/ajv/types/interfaces/interface-ajv-schema-validate-function.md
description: api documentation of AjvSchemaValidateFunction from @tsed/ajv
---

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

##

```ts
(schema: any, data: any, parentSchema?: AnySchemaObject, dataCxt?: AjvDataValidationCtx): boolean | Promise<any>;
```
