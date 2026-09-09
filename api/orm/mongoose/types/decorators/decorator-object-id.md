---
url: /api/orm/mongoose/types/decorators/decorator-object-id.md
description: api documentation of ObjectID from @tsed/mongoose
---

## Usage

```typescript
import { ObjectID } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/objectID.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/objectID.ts#L0-L0).

## Overview

```ts
function ObjectID(name?: string): any;
export type ObjectID = Types.ObjectId;
```

## Description

Tell Mongoose whether to define an ObjectId property.

### Example

```typescript
@Model()
export class EventModel {
  @ObjectId('id')
  _id: string;
}
```
