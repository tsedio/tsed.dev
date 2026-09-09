---
url: /api/third-parties/formio/types/domain/interface-formio-models.md
description: api documentation of FormioModels from @tsed/formio
---

## Usage

```typescript
import { FormioModels } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioModels.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioModels.ts#L0-L0).

## Overview

```ts
interface FormioModels {
    schemas: FormioSchemas;
    models: FormioModelsModels;
    specs: {
        action: any;
        actionItem: any;
        form: any;
        role: any;
        schema: any;
        submission: any;
        token: any;
        [key: string]: any;
    };
}
```

## schemas

```ts
schemas: FormioSchemas;
```

## models

```ts
models: FormioModelsModels;
```

## specs

```ts
specs: {
     action: any;
     actionItem: any;
     form: any;
     role: any;
     schema: any;
     submission: any;
     token: any;
     [key: string]: any;
 };
```
