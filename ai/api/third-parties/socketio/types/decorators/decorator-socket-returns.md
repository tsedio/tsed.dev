---
title: SocketReturns from @tsed/socketio
description: api documentation of SocketReturns from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketReturns decorator
---
# SocketReturns - @tsed/socketio

## Usage

```typescript
import { SocketReturns } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketReturns.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketReturns.ts#L0-L0).

## Overview

```ts
function SocketReturns(eventName: string, type: SocketReturnsTypes): (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => void;
```
