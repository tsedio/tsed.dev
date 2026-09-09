---
title: BroadcastOthers from @tsed/socketio
description: api documentation of BroadcastOthers from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation BroadcastOthers decorator
---
# BroadcastOthers - @tsed/socketio

## Usage

```typescript
import { BroadcastOthers } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/broadcastOthers.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/broadcastOthers.ts#L0-L0).

## Overview

```ts
function BroadcastOthers(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

<!-- Description -->

## Description

Broadcast the response for all client registered in the same namespace except to the current client.

With the `@BroadcastOthers` decorator, the method will accept a return type (Promise or not).

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  @BroadcastOthers("returnEvent")
  async myMethod(@Args(0) data: any, @Nsp socket): Promise<any> {
     return Promise.resolve({data})
  }
}
```
