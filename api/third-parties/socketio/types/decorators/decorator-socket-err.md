---
url: /api/third-parties/socketio/types/decorators/decorator-socket-err.md
description: api documentation of SocketErr from @tsed/socketio
---

## Usage

```typescript
import { SocketErr } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketErr.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketErr.ts#L0-L0).

## Overview

```ts
function SocketErr(target: Object, propertyKey: string, index: number): any;
```

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
