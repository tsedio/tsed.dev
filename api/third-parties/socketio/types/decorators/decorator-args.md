---
url: /api/third-parties/socketio/types/decorators/decorator-args.md
description: api documentation of Args from @tsed/socketio
---

## Usage

```typescript
import { Args } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/args.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/args.ts#L0-L0).

## Overview

```ts
function Args(mapIndex?: number, useType?: any): any;
```

## Description

Inject the list of arguments in the decorated parameter.

`@Args` accept an index parameter to pick up directly the item in the arguments list.

### Example

```typescript
@SocketService("/nsp")
export class MyWS {

  @Input("event")
  myMethod(@Args() arguments: any[]) {

  }

  @Input("event2")
  myMethod2(@Args(0) data: any) {

  }
}
```
