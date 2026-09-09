---
url: /api/specs/ajv/types/interfaces/interface-ajv-data-validate-function.md
description: api documentation of AjvDataValidateFunction from @tsed/ajv
---

## Usage

```typescript
import { AjvDataValidateFunction } from "@tsed/ajv";
```

> See [/packages/specs/ajv/src/interfaces/KeywordMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/ajv/src/interfaces/KeywordMethods.ts#L0-L0).

## Overview

```ts
interface AjvDataValidateFunction {
    (...args: Parameters<ValidateFunction>): boolean | Promise<any>;
}
```

##

```ts
(...args: Parameters<ValidateFunction>): boolean | Promise<any>;
```
