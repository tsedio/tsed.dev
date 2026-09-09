---
title: SocketSession from @tsed/socketio
description: api documentation of SocketSession from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketSession type
---
# SocketSession - @tsed/socketio

## Usage

```typescript
import { SocketSession } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketSession.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketSession.ts#L0-L0).

## Overview

```ts
type SocketSession = Map<string, any>;

export function SocketSession(target: Object, propertyKey: string, index: number): void;
```
