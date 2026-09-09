---
url: /api/third-parties/socketio/types/class/class-socket-session-data.md
description: api documentation of SocketSessionData from @tsed/socketio
---

## Usage

```typescript
import { SocketSessionData } from "@tsed/socketio";
```

> See [/packages/third-parties/socketio/src/class/SocketSessionData.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/socketio/src/class/SocketSessionData.ts#L0-L0).

## Overview

```ts
class SocketSessionData extends Map<string, unknown> {
    constructor(data: Record<string, unknown>);
    static get [Symbol.species](): MapConstructor;
    get size(): number;
    [Symbol.iterator](): MapIterator<[string, unknown]>;
    clear(): void;
    delete(key: string): boolean;
    entries(): MapIterator<[string, unknown]>;
    forEach(callbackfn: (value: unknown, key: string, map: Map<string, unknown>) => void, thisArg?: any): void;
    get(key: string): unknown | undefined;
    has(key: string): boolean;
    keys(): MapIterator<string>;
    set(key: string, value: unknown): this;
    values(): MapIterator<unknown>;
}
```

## Description

Represents session data associated with a socket connection, providing a compatibility layer with Ts.ED v7 by wrapping a `socket.data` which is used to archive recoverability and resiliency to a `Map` instance.

This class implements the `Map<string, unknown>` interface and provides methods and properties to manage and manipulate session data.

## static get \[Symbol.species]

```ts
static get [Symbol.species](): MapConstructor;
```

## get size

```ts
get size(): number;
```

## \[Symbol.iterator]

```ts
[Symbol.iterator](): MapIterator<[string, unknown]>;
```

## clear

```ts
clear(): void;
```

## delete

```ts
delete(key: string): boolean;
```

## entries

```ts
entries(): MapIterator<[string, unknown]>;
```

## forEach

```ts
forEach(callbackfn: (value: unknown, key: string, map: Map<string, unknown>) => void, thisArg?: any): void;
```

## get

```ts
get(key: string): unknown | undefined;
```

## has

```ts
has(key: string): boolean;
```

## keys

```ts
keys(): MapIterator<string>;
```

## set

```ts
set(key: string, value: unknown): this;
```

## values

```ts
values(): MapIterator<unknown>;
```
