---
url: /api/orm/mongoose/types/interfaces/type-mongoose-model.md
description: api documentation of MongooseModel from @tsed/mongoose
---

## Usage

```typescript
import { MongooseModel } from "@tsed/orm/mongoose/src/interfaces/MongooseModel";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseModel.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseModel.ts#L0-L0).

## Overview

```ts
type MongooseModel<T> = Model<MongooseMergedDocument<Document & T & MongooseDocumentMethods<T>>>;
```
