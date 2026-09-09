---
title: MongooseModel from @tsed/mongoose
description: api documentation of MongooseModel from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation MongooseModel type
---
# MongooseModel - @tsed/mongoose

## Usage

```typescript
import { MongooseModel } from "@tsed/orm/mongoose/src/interfaces/MongooseModel";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseModel.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseModel.ts#L0-L0).

## Overview

```ts
type MongooseModel<T> = Model<MongooseMergedDocument<Document & T & MongooseDocumentMethods<T>>>;
```
