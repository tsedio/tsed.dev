---
title: SocketUseBefore from @tsed/socketio
description: api documentation of SocketUseBefore from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketUseBefore decorator
---
# SocketUseBefore - @tsed/socketio

## Usage

```typescript
import { SocketUseBefore } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketUseBefore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketUseBefore.ts#L0-L0).

## Overview

```ts
function SocketUseBefore(...middlewares: Type<any>[]): (target: Object, propertyKey?: string, descriptor?: PropertyDescriptor) => void;
```

<!-- Description -->

## Description

Attach a Socket Middleware to a method or a class.

### Example

A middleware can be also used on a `SocketService` either on a class or on a method.

Here an example of a middleware:

```typescript
@SocketMiddleware()
export class UserConverterSocketMiddleware {
    constructor(private converterService: ConverterService) {
    }
    async use(@Args() args: any[]) {

        let [user] = args;
        // update Arguments
        user = ConverterService.deserialize(user, User);

        return [user];
    }
}
```

> The user instance will be forwarded to the next middleware and to your decorated method.

Then:

```typescript
import {SocketService, SocketUseAfter, SocketUseBefore, Emit, Input, Args} from "@tsed/socketio";
import {UserConverterSocketMiddleware} from "../middlewares.js";
import {User} from "../models/User.js";

@SocketService("/my-namespace")
@SocketUseBefore(UserConverterSocketMiddleware) // global version
export class MySocketService {

   @Input("eventName")
   @Emit("responseEventName") // or Broadcast or BroadcastOthers
   @SocketUseBefore(UserConverterSocketMiddleware)
   async myMethod(@Args(0) user: User) {

       console.log(user);

       return user;
   }
}
```
