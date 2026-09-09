---
url: /api/orm/mongoose/types/decorators/decorator-model.md
description: api documentation of Model from @tsed/mongoose
---

## Usage

```typescript
import { Model } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/model.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/model.ts#L0-L0).

## Overview

```ts
function Model(options?: MongooseModelOptions): any;
```

## Description

Define a class as a Mongoose Model. The model can be injected to the Service, Controller, Middleware, Converters or Filter with
`@Inject` annotation.

### Example

```typescript
@Model()
export class EventModel {
  @Property()
  field: string;
}
```

Then inject the model into a service:

```typescript
class MyService {
   constructor(@Inject(EventModel) eventModel: MongooseModel<EventModel>) {
       eventModel.findById().exec();
   }
}
```

### Options

* `schemaOptions` (mongoose.SchemaOptions): Option to configure the schema behavior.
* `name` (String): model name.
* `collection` (String): collection (optional, induced from model name).
* `skipInit` (Boolean): skipInit whether to skip initialization (defaults to false).
