---
url: /api/orm/mongoose/types/decorators/decorator-mongoose-indexes.md
description: api documentation of MongooseIndexes from @tsed/mongoose
---

## Usage

```typescript
import { MongooseIndexes } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/mongooseIndexes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/mongooseIndexes.ts#L0-L0).

## Overview

```ts
function MongooseIndexes(indexes: Array<{
    fields: object;
    options?: any;
}>): Function;
```

## Description

Calls schema.index() to define multiple indexes (most likely compound) for the schema.

### Example

```typescript
@Model()
@MongooseIndexes([{fields: {first: 1, second: 1}, options:{unique: 1}}, {fields: {first: 1, third: 1}, options:{unique: 1}}])
export class EventModel {

  @Property()
  first: string;

  @Property()
  second: string;

  @Property()
  third: string;

}
```

## fields

```ts
fields: object;
```

## options

```ts
options?: any;
```
