---
url: /api/third-parties/formio/types/domain/interface-formio-model.md
description: api documentation of FormioModel from @tsed/formio
---

## Usage

```typescript
import { FormioModel } from "@tsed/formio";
```

> See [/packages/third-parties/formio/src/domain/FormioBaseModel.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioBaseModel.ts#L0-L0).

## Overview

```ts
interface FormioModel<T = any> extends FormioBaseModel<T> {
    schema: FormioMongooseSchema<T>;
}
```

## schema

```ts
schema: FormioMongooseSchema<T>;
```
