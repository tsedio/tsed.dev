---
url: /api/third-parties/socketio/types/decorators/decorator-reason.md
description: api documentation of Reason from @tsed/socketio
---

## Usage

```typescript
import { Reason } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/reason.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/reason.ts#L0-L0).

## Overview

```ts
function Reason(target: Object, propertyKey: string, index: number): void;
```

## Description

Inject the disconnection reason into the decorated parameter.

This decorator is used in conjunction with the `$onDisconnect` event handler to handle disconnection reasons in SocketIO services.
It allows you to access the reason for the disconnection in your method implementation. For details please refer to the [Socket.io documentation](https://socket.io/docs/v4/server-api/#event-disconnect).

```typescript
@SocketService("/nsp")
export class MyWS {
  public async $onDisconnect(
    @Reason reason: string = ''
  ) {
     // your implementation
  }
}
```
