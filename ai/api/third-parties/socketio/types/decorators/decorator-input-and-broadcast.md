---
title: InputAndBroadcast from @tsed/socketio
description: api documentation of InputAndBroadcast from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation InputAndBroadcast decorator
---
# InputAndBroadcast - @tsed/socketio

## Usage

```typescript
import { InputAndBroadcast } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/inputAndBroadcast.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/inputAndBroadcast.ts#L0-L0).

## Overview

```ts
function InputAndBroadcast(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

<!-- Description -->

## Description

Attach the decorated method to the socket event and broadcast the response to all clients.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @InputAndBroadcast("event")
  async myMethod(@Args(0) data: any, @Nsp socket) {
     return {data: "data"};
  }
}
```
