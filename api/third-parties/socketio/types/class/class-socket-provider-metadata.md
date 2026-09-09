---
url: /api/third-parties/socketio/types/class/class-socket-provider-metadata.md
description: api documentation of SocketProviderMetadata from @tsed/socketio
---

## Usage

```typescript
import { SocketProviderMetadata } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/class/SocketProviderMetadata.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/class/SocketProviderMetadata.ts#L0-L0).

## Overview

```ts
class SocketProviderMetadata {
    type: SocketProviderTypes;
    namespace: string | RegExp;
    error: boolean;
    injectNamespaces: SocketInjectableNsp[];
    useBefore: any[];
    useAfter: any[];
    handlers: Record<string, SocketHandlerMetadata>;
    constructor(options?: Partial<SocketProviderMetadata>);
    get useHandler(): SocketHandlerMetadata;
    get $onConnection(): SocketHandlerMetadata;
    get $onDisconnect(): SocketHandlerMetadata;
    get(key: string): SocketHandlerMetadata;
    set(key: string, metadata: SocketHandlerMetadata): void;
    getHandlers(): SocketHandlerMetadata[];
    createHook(hook: string, eventName: string): void;
}
```

## type

```ts
type: SocketProviderTypes;
```

## namespace

```ts
namespace: string | RegExp;
```

## error

```ts
error: boolean;
```

## injectNamespaces

```ts
injectNamespaces: SocketInjectableNsp[];
```

## useBefore

```ts
useBefore: any[];
```

## useAfter

```ts
useAfter: any[];
```

## handlers

```ts
handlers: Record<string, SocketHandlerMetadata>;
```

## get useHandler

```ts
get useHandler(): SocketHandlerMetadata;
```

## get $onConnection

```ts
get $onConnection(): SocketHandlerMetadata;
```

## get $onDisconnect

```ts
get $onDisconnect(): SocketHandlerMetadata;
```

## get

```ts
get(key: string): SocketHandlerMetadata;
```

## set

```ts
set(key: string, metadata: SocketHandlerMetadata): void;
```

## getHandlers

```ts
getHandlers(): SocketHandlerMetadata[];
```

## createHook

```ts
createHook(hook: string, eventName: string): void;
```
