---
url: /api/third-parties/socketio/types/decorators/decorator-broadcast.md
description: api documentation of Broadcast from @tsed/socketio
---

## Usage

```typescript
import { Broadcast } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/broadcast.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/broadcast.ts#L0-L0).

## Overview

```ts
function Broadcast(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

## Description

Broadcast the response for all client registered in the same namespace.

With the `@Broadcast` decorator, the method will accept a return type (Promise or not).

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  @Broadcast("returnEvent")
  async myMethod(@Args(0) data: any, @Nsp socket): Promise<any> {
     return Promise.resolve({data})
  }
}
```
