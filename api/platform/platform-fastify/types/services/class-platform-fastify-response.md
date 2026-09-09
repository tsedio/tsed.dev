---
url: >-
  /api/platform/platform-fastify/types/services/class-platform-fastify-response.md
description: api documentation of PlatformFastifyResponse from @tsed/platform-fastify
---

## Usage

```typescript
import { PlatformFastifyResponse } from "@tsed/platform-fastify";
```

> See [/packages/platform/platform-fastify/src/services/PlatformFastifyResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-fastify/src/services/PlatformFastifyResponse.ts#L0-L0).

## Overview

```ts
class PlatformFastifyResponse extends PlatformResponse<TsED.Response> {
    readonly $ctx: PlatformContext;
    constructor($ctx: PlatformContext);
    getRes(): ServerResponse;
    status(status: number): this;
    contentType(contentType: string): this;
    get(name: string): string | number | string[] | undefined;
    attachment(filename: string): this;
    setHeader(key: string, item: any): this;
    stream(data: any): this;
    json(data: any): this;
}
```

## readonly $ctx

```ts
readonly $ctx: PlatformContext;
```

## getRes

```ts
getRes(): ServerResponse;
```

Return the Node.js response object

## status

```ts
status(status: number): this;
```

Sets the HTTP status for the response.

## contentType

```ts
contentType(contentType: string): this;
```

Set `Content-Type` response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:

```
res.type('.html');
res.type('html');
res.type('json');
res.type('application/json');
res.type('png');
```

## get

```ts
get(name: string): string | number | string[] | undefined;
```

Returns the HTTP response header specified by field. The match is case-insensitive.

```typescript
response.get('Content-Type') // => "text/plain"
```

## attachment

```ts
attachment(filename: string): this;
```

## setHeader

```ts
setHeader(key: string, item: any): this;
```

## stream

```ts
stream(data: any): this;
```

## json

```ts
json(data: any): this;
```
