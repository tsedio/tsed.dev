---
url: >-
  /api/third-parties/socketio/types/decorators/decorator-input-and-broadcast-others.md
description: api documentation of InputAndBroadcastOthers from @tsed/socketio
---

## Usage

```typescript
import { InputAndBroadcastOthers } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/inputAndBroadcastOthers.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/inputAndBroadcastOthers.ts#L0-L0).

## Overview

```ts
function InputAndBroadcastOthers(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

## Description

Attach the decorated method to the socket event and broadcast the response to all clients with the exception of the connected customer.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @InputAndBroadcastOthers("event")
  async myMethod(@Args(0) data: any, @Nsp socket) {
     return {data: "data"};
  }
}
```
