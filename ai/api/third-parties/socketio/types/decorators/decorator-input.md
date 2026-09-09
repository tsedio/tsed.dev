---
title: Input from @tsed/socketio
description: api documentation of Input from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation Input decorator
---
# Input - @tsed/socketio

## Usage

```typescript
import { Input } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/input.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/input.ts#L0-L0).

## Overview

```ts
function Input(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

<!-- Description -->

## Description

Attach the decorated method to the socket event.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  myMethod(@Args(0) data: any, @Nsp socket) {

  }
}
```
