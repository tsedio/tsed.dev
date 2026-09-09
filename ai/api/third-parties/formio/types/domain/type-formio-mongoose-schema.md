---
title: FormioMongooseSchema from @tsed/formio
description: api documentation of FormioMongooseSchema from @tsed/formio
meta:
 - name: keywords
   description: api typescript node.js documentation FormioMongooseSchema type
---
# FormioMongooseSchema - @tsed/formio

## Usage

```typescript
import { FormioMongooseSchema } from "@tsed/third-parties/formio/src/domain/FormioBaseModel";
```

> See [/packages/third-parties/formio/src/domain/FormioBaseModel.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/formio/src/domain/FormioBaseModel.ts#L0-L0).

## Overview

```ts
type FormioMongooseSchema<T> = Schema<Document<T>> & {
    machineName(document: MongooseDocument<T>, done: Function): void;
};
```

<!-- Members -->

## machineName

```ts
machineName(document: MongooseDocument<T>, done: Function): void;
```
