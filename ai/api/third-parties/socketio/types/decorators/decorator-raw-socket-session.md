---
title: RawSocketSession from @tsed/socketio
description: api documentation of RawSocketSession from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation RawSocketSession decorator
---
# RawSocketSession - @tsed/socketio

## Usage

```typescript
import { RawSocketSession } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketSession.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketSession.ts#L0-L0).

## Overview

```ts
function RawSocketSession(target: Object, propertyKey: string, index: number): void;
```

<!-- Description -->

## Description

Inject the raw `socket.data` in the decorated parameter.

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  myMethod(@RawSocketSession session: Record<string, unknown>) {
    console.log(session);
  }
}
```
