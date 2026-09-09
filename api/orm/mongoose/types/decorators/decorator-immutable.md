---
url: /api/orm/mongoose/types/decorators/decorator-immutable.md
description: api documentation of Immutable from @tsed/mongoose
---

## Usage

```typescript
import { Immutable } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/immutable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/immutable.ts#L0-L0).

## Overview

```ts
function Immutable(immutable?: boolean | ((this: any, doc: any) => boolean)): PropertyDecorator;
```

## Description

If [truthy](https://masteringjs.io/tutorials/fundamentals/truthy), Mongoose will
disallow changes to this path once the document is saved to the database for the first time. Read more
about [immutability in Mongoose here](http://thecodebarbarian.com/whats-new-in-mongoose-5-6-immutable-properties.html).

### Example

```typescript
@Model()
export class EventModel {
  @Immutable()
  field: string;
}
```
