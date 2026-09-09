---
url: /api/orm/mongoose/types/decorators/decorator-mongoose-index.md
description: api documentation of MongooseIndex from @tsed/mongoose
---

## Usage

```typescript
import { MongooseIndex } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/mongooseIndex.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/mongooseIndex.ts#L0-L0).

## Overview

```ts
function MongooseIndex(fields: object, options?: any): Function;
```

## Description

Calls schema.index() to define an index (most likely compound) for the schema.

### Example

```typescript
@Model()
@MongooseIndex({first: 1, second: 1}, {unique: 1})
export class EventModel {

  @Property()
  first: string;

  @Property()
  second: string;

}
```
