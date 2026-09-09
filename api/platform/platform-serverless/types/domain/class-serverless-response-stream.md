---
url: >-
  /api/platform/platform-serverless/types/domain/class-serverless-response-stream.md
description: api documentation of ServerlessResponseStream from @tsed/platform-serverless
---

## Usage

```typescript
import { ServerlessResponseStream } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessResponseStream.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessResponseStream.ts#L0-L0).

## Overview

```ts
class ServerlessResponseStream extends Stream.Writable {
    _meta: ServerlessResponseMeta;
    constructor();
    static setMeta(resStream: ServerlessResponseStream, meta: ServerlessResponseMeta): any;
    static streamifyResponse(handler: RequestHandler): RequestHandler;
    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
    setMeta(meta: ServerlessResponseMeta): void;
    getBufferedData(): Buffer;
}
```

## \_meta

```ts
_meta: ServerlessResponseMeta;
```

## static setMeta

```ts
static setMeta(resStream: ServerlessResponseStream, meta: ServerlessResponseMeta): any;
```

## static streamifyResponse

```ts
static streamifyResponse(handler: RequestHandler): RequestHandler;
```

## \_write

```ts
_write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
```

## setMeta

```ts
setMeta(meta: ServerlessResponseMeta): void;
```

## getBufferedData

```ts
getBufferedData(): Buffer;
```
