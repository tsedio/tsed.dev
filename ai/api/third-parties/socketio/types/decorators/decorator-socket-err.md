---
title: SocketErr from @tsed/socketio
description: api documentation of SocketErr from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketErr decorator
---
# SocketErr - @tsed/socketio

## Usage

```typescript
import { SocketErr } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketErr.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketErr.ts#L0-L0).

## Overview

```ts
function SocketErr(target: Object, propertyKey: string, index: number): any;
```

<!-- Description -->

## Description

Inject the error in the parameters

### Example

```typescript
@SocketMiddlewareError()
export class MyMiddleware {

  myMethod(@SocketErr err: any, @Args() arguments: any[]) {

  }
}
```
