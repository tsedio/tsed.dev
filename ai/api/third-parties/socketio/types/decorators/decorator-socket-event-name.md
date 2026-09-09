---
title: SocketEventName from @tsed/socketio
description: api documentation of SocketEventName from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketEventName decorator
---
# SocketEventName - @tsed/socketio

## Usage

```typescript
import { SocketEventName } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketEventName.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketEventName.ts#L0-L0).

## Overview

```ts
function SocketEventName(target: Object, propertyKey: string, index: number): any;
```

<!-- Description -->

## Description

Inject the Socket instance in the decorated parameter.

### Example

```typescript
@SocketMiddleware("/nsp")
export class MyMiddleware {
  use(@SocketEventName eventName: string) {

  }
}
```
