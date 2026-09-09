---
title: EventStreamContext from @tsed/sse
description: api documentation of EventStreamContext from @tsed/sse
meta:
 - name: keywords
   description: api typescript node.js documentation EventStreamContext class
---
# EventStreamContext - @tsed/sse

## Usage

```typescript
import { EventStreamContext } from "@tsed/sse";
```

> See [/packages/third-parties/sse/src/domain/EventStreamContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/sse/src/domain/EventStreamContext.ts#L0-L0).

## Overview

```ts
class EventStreamContext {
    
    constructor({ $ctx, ...opts }: EventStreamContextOptions);
    writeHead(headers?: Record<string, string>): void;
    on(event: string, listener: (...args: any[]) => void): this;
    subscribe(observable: Observable<unknown>): this;
    stream(stream: NodeJS.ReadableStream | EventEmitter): void;
    emit(event: string | undefined, data: unknown): this | undefined;
    write(obj: Record<string, string>): void;
    isDone(): boolean;
    end(): void;
}
```

<!-- Members -->

## writeHead

```ts
writeHead(headers?: Record<string, string>): void;
```

## on

```ts
on(event: string, listener: (...args: any[]) => void): this;
```

## subscribe

```ts
subscribe(observable: Observable<unknown>): this;
```

## stream

```ts
stream(stream: NodeJS.ReadableStream | EventEmitter): void;
```

## emit

```ts
emit(event: string | undefined, data: unknown): this | undefined;
```

## write

```ts
write(obj: Record<string, string>): void;
```

## isDone

```ts
isDone(): boolean;
```

## end

```ts
end(): void;
```
