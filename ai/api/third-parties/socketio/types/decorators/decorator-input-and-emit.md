---
title: InputAndEmit from @tsed/socketio
description: api documentation of InputAndEmit from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation InputAndEmit decorator
---
# InputAndEmit - @tsed/socketio

## Usage

```typescript
import { InputAndEmit } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/inputAndEmit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/inputAndEmit.ts#L0-L0).

## Overview

```ts
function InputAndEmit(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

<!-- Description -->

## Description

Attach the decorated method to the socket event and emit the response to the client.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @InputAndEmit("event")
  async myMethod(@Args(0) data: any, @Nsp socket) {
     return {data: "data"};
  }
}
```
