---
title: FormioModel from @tsed/formio
description: api documentation of FormioModel from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioModel interface
---
# FormioModel - @tsed/formio

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

<!-- Members -->

## schema

```ts
schema: FormioMongooseSchema<T>;
```
