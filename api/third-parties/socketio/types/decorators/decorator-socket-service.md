---
url: /api/third-parties/socketio/types/decorators/decorator-socket-service.md
description: api documentation of SocketService from @tsed/socketio
---

## Usage

```typescript
import { SocketService } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/decorators/socketService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/decorators/socketService.ts#L0-L0).

## Overview

```ts
function SocketService(namespace?: string | RegExp): any;
```

## Description

The decorators `@SocketService()` a new socket service (and service) can be injected in other service or controller on there `constructor`.
All services annotated with `@SocketService()` are constructed one time.

> `@SocketService()` use the `reflect-metadata` to collect and inject service on controllers or other services.
