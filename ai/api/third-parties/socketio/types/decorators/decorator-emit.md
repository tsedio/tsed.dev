---
title: Emit from @tsed/socketio
description: api documentation of Emit from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation Emit decorator
---
# Emit - @tsed/socketio

## Usage

```typescript
import { Emit } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/emit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/emit.ts#L0-L0).

## Overview

```ts
function Emit(eventName: string): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```

<!-- Description -->

## Description

Emit the response to the client.

With the `@Emit` decorator, the method will accept a return type (Promise or not).

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  @Emit("returnEvent")
  async myMethod(@Args(0) data: any, @Nsp socket): Promise<any> {
     return Promise.resolve({data})
  }
}
```
