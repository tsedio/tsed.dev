---
url: /api/orm/mongoose/types/interfaces/type-mongoose-merged-document.md
description: api documentation of MongooseMergedDocument from @tsed/mongoose
---

## Usage

```typescript
import { MongooseMergedDocument } from "@tsed/orm/mongoose/src/interfaces/MongooseModel";
```

> See [/packages/orm/mongoose/src/interfaces/MongooseModel.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/interfaces/MongooseModel.ts#L0-L0).

## Overview

```ts
type MongooseMergedDocument<T> = {
    [K in keyof T]: T[K];
};
```

## \[K in keyof T]

```ts
[K in keyof T]: T[K];
```
