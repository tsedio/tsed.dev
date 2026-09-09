---
title: Args from @tsed/socketio
description: api documentation of Args from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation Args decorator
---
# Args - @tsed/socketio

## Usage

```typescript
import { Args } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/args.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/args.ts#L0-L0).

## Overview

```ts
function Args(mapIndex?: number, useType?: any): any;
```

<!-- Description -->

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
