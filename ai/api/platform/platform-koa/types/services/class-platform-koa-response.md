---
title: PlatformKoaResponse from @tsed/platform-koa
description: api documentation of PlatformKoaResponse from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformKoaResponse class
---
# PlatformKoaResponse - @tsed/platform-koa

## Usage

```typescript
import { PlatformKoaResponse } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/services/PlatformKoaResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/services/PlatformKoaResponse.ts#L0-L0).

## Overview

```ts
class PlatformKoaResponse extends PlatformResponse<Koa.Response> {
    get ctx(): Koa.Context;
    get statusCode(): number;
    get locals(): Koa.DefaultState;
    getRes(): ServerResponse;
    hasStatus(): boolean;
    status(status: number): this;
    contentType(contentType: string): this;
    getHeaders(): import("http").OutgoingHttpHeaders;
    stream(data: any): this;
    getBody(): any;
    cookie(name: string, value: string | null, opts?: TsED.SetCookieOpts): this;
    protected json(data: any): this;
    protected buffer(data: Buffer): this;
    protected end(data?: string | Buffer): void;
}
```

<!-- Members -->

## get ctx

```ts
get ctx(): Koa.Context;
```

## get statusCode

```ts
get statusCode(): number;
```

## get locals

```ts
get locals(): Koa.DefaultState;
```

## getRes

```ts
getRes(): ServerResponse;
```

Return the Node.js response object

## hasStatus

```ts
hasStatus(): boolean;
```

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

## getHeaders

```ts
getHeaders(): import("http").OutgoingHttpHeaders;
```

## stream

```ts
stream(data: any): this;
```

## getBody

```ts
getBody(): any;
```

## cookie

```ts
cookie(name: string, value: string | null, opts?: TsED.SetCookieOpts): this;
```

## protected json

```ts
protected json(data: any): this;
```

## protected buffer

```ts
protected buffer(data: Buffer): this;
```

## protected end

```ts
protected end(data?: string | Buffer): void;
```
