---
url: >-
  /api/third-parties/schema-formio/types/interfaces/type-formio-data-resolver-ctx.md
description: api documentation of FormioDataResolverCtx from @tsed/schema-formio
---

## Usage

```typescript
import { FormioDataResolverCtx } from "@tsed/third-parties/schema-formio/src/interfaces/FormioDataResolver";
```

> See [/packages/third-parties/schema-formio/src/interfaces/FormioDataResolver.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/schema-formio/src/interfaces/FormioDataResolver.ts#L0-L0).

## Overview

```ts
type FormioDataResolverCtx = {
    component: FormioComponent;
    form: FormioForm;
} & JsonSchemaOptions;
```

## component

```ts
component: FormioComponent;
```

## form

```ts
form: FormioForm;
```
