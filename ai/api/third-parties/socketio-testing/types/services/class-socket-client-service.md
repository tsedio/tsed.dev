---
title: SocketClientService from @tsed/socketio-testing
description: api documentation of SocketClientService from @tsed/socketio-testing
meta:
 - name: keywords
   description: api typescript node.js documentation SocketClientService class
---
# SocketClientService - @tsed/socketio-testing

## Usage

```typescript
import { SocketClientService } from "@tsed/socketio-testing";
```

> See [/packages/third-parties/socketio-testing/src/services/SocketClientService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio-testing/src/services/SocketClientService.ts#L0-L0).

## Overview

```ts
class SocketClientService implements OnDestroy {
    
    get(namespace?: string, path?: string): Promise<Socket>;
    $onDestroy(): void;
}
```

<!-- Members -->

## get

```ts
get(namespace?: string, path?: string): Promise<Socket>;
```

## $onDestroy

```ts
$onDestroy(): void;
```
