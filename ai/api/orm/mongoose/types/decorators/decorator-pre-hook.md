---
title: PreHook from @tsed/mongoose
description: api documentation of PreHook from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation PreHook decorator
---
# PreHook - @tsed/mongoose

## Usage

```typescript
import { PreHook } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/preHook.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/preHook.ts#L0-L0).

## Overview

```ts
function PreHook<T = any>(method: MongooseMethods, fn: MongoosePreHookCB<T>, options?: MongooseHookOptions): ClassDecorator;
export function PreHook<T = any>(method: MongooseMethods, options?: MongooseHookOptions): StaticMethodDecorator;
```

<!-- Description -->

## Description

We can simply attach a `@PreHook` decorator to your model class and
define the hook function like you normally would in Mongoose.

```typescript
import {Ignore, Required} from "@tsed/platform-http";
import {PreHook, Model} from "@tsed/mongoose";

@Model()
@PreHook("save", (car: CarModel, next) => {
   if (car.model === 'Tesla') {
       car.isFast = true;
     }
     next();
})
export class CarModel {

   @Ignore()
   _id: string;

   @Required()
   model: string;

   @Required()
   isFast: boolean;

   // or Prehook on static method
   @PreHook("save")
   static preSave(car: CarModel, next) {
      if (car.model === 'Tesla') {
          car.isFast = true;
      }
      next();
   }
}
```

This will execute the pre-save hook each time a `CarModel` document is saved.
