---
title: PostHook from @tsed/mongoose
description: api documentation of PostHook from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation PostHook decorator
---
# PostHook - @tsed/mongoose

## Usage

```typescript
import { PostHook } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/postHook.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/postHook.ts#L0-L0).

## Overview

```ts
function PostHook<T = any>(method: MongooseMethods, fn: MongoosePostHookCB<T>): ClassDecorator;
export function PostHook<T = any>(method: MongooseMethods, fn: MongoosePostHookCB<T>, options: MongooseHookOptions): ClassDecorator;
export function PostHook<T = any>(method: MongooseMethods, options: MongooseHookOptions): StaticMethodDecorator;
```

<!-- Description -->

## Description

We can simply attach a `@PostHook` decorator to your model class and
define the hook function like you normally would in Mongoose.

```typescript
import {Ignore, Required} from "@tsed/platform-http";
import {PostHook, Model} from "@tsed/mongoose";

@Model()
@PostHook("save", (car: CarModel) => {
   if (car.topSpeedInKmH > 300) {
       console.log(car.model, 'is fast!');
   }
})
export class CarModel {
   @Ignore()
   _id: string;

   @Required()
   model: string;

   @Required()
   isFast: boolean;

   // or Prehook on static method
   @PostHook("save")
   static postSave(car: CarModel) {
      if (car.topSpeedInKmH > 300) {
          console.log(car.model, 'is fast!');
      }
   }
}
```

This will execute the post-save hook each time a `CarModel` document is saved.
