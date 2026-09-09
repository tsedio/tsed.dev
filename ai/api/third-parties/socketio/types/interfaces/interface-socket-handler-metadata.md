---
title: SocketHandlerMetadata from @tsed/socketio
description: api documentation of SocketHandlerMetadata from @tsed/socketio
meta:
 - name: keywords
   description: api typescript node.js documentation SocketHandlerMetadata interface
---
# SocketHandlerMetadata - @tsed/socketio

## Usage

```typescript
import { SocketHandlerMetadata } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/interfaces/SocketHandlerMetadata.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/interfaces/SocketHandlerMetadata.ts#L0-L0).

## Overview

```ts
interface SocketHandlerMetadata {
    eventName?: string;
    methodClassName: string;
    useBefore?: any[];
    useAfter?: any[];
    parameters?: {
        [key: number]: SocketParamMetadata;
    };
    returns?: {
        type: SocketReturnsTypes;
        eventName: string;
    };
}
```

<!-- Members -->

## eventName

```ts
eventName?: string;
```

## methodClassName

```ts
methodClassName: string;
```

## useBefore

```ts
useBefore?: any[];
```

## useAfter

```ts
useAfter?: any[];
```

## parameters

```ts
parameters?: {
     [key: number]: SocketParamMetadata;
 };
```

## returns

```ts
returns?: {
     type: SocketReturnsTypes;
     eventName: string;
 };
```
