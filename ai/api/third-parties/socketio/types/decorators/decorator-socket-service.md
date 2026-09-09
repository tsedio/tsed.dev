---
title: SocketService from @tsed/socketio
description: api documentation of SocketService from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketService decorator
---
# SocketService - @tsed/socketio

## Usage

```typescript
import { SocketService } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketService.ts#L0-L0).

## Overview

```ts
function SocketService(namespace?: string | RegExp): any;
```

<!-- Description -->

## Description

The decorators `@SocketService()` a new socket service (and service) can be injected in other service or controller on there `constructor`.
All services annotated with `@SocketService()` are constructed one time.

> `@SocketService()` use the `reflect-metadata` to collect and inject service on controllers or other services.
