---
title: SocketIOService from @tsed/socketio
description: api documentation of SocketIOService from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketIOService class
---
# SocketIOService - @tsed/socketio

## Usage

```typescript
import { SocketIOService } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/services/SocketIOService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/services/SocketIOService.ts#L0-L0).

## Overview

```ts
class SocketIOService {
    
    
    constructor(injector: InjectorService, io: SocketIO.Server);
    getNsp(namespace?: string | RegExp): {
        nsp: SocketIO.Namespace;
        instances: any[];
    };
    addSocketProvider(provider: Provider<any>): void;
}
```

<!-- Members -->

## getNsp

```ts
getNsp(namespace?: string | RegExp): {
     nsp: SocketIO.Namespace;
     instances: any[];
 };
```

## addSocketProvider

```ts
addSocketProvider(provider: Provider<any>): void;
```
