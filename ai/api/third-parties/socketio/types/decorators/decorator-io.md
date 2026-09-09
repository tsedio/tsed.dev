---
title: IO from @tsed/socketio
description: api documentation of IO from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation IO decorator
---
# IO - @tsed/socketio

## Usage

```typescript
import { IO } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/io.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/io.ts#L0-L0).

## Overview

```ts
function IO(): (...args: any[]) => any;
export function IO(target: Type<any>, targetKey: string | symbol | undefined, descriptor: TypedPropertyDescriptor<Function> | number): any;
```

<!-- Description -->

## Description

Inject the [SocketIO.Server](https://socket.io/docs/server-api/) instance in the decorated parameter.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {
  constructor(@IO private io: Server) {}
}
```
