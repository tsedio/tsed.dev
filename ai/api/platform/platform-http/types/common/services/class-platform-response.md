---
title: PlatformResponse from @tsed/platform-http
description: api documentation of PlatformResponse from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformResponse class
---
# PlatformResponse - @tsed/platform-http

## Usage

```typescript
import { PlatformResponse } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/PlatformResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/PlatformResponse.ts#L0-L0).

## Overview

```ts
class PlatformResponse<Res extends Record<string, any> = any> {
    readonly $ctx: PlatformContext;
    data: any;
    constructor($ctx: PlatformContext);
    get request(): PlatformRequest;
    get raw(): Res;
    get statusCode(): any;
    get locals(): any;
    get response(): Res;
    get res(): ServerResponse<import("http").IncomingMessage>;
    get(name: string): any;
    getHeaders(): OutgoingHttpHeaders;
    getResponse<R = Res>(): R;
    getRes(): ServerResponse;
    hasStatus(): boolean;
    status(status: number): this;
    setHeaders(headers: OutgoingHttpHeaders): this;
    setHeader(key: string, item: any): this;
    contentType(contentType: string): this;
    contentLength(length: number): this;
    getContentLength(): number | undefined;
    getContentType(): any;
    attachment(filename: string): this;
    redirect(status: number, url: string): this;
    location(location: string): this;
    stream(data: any): this;
    render(path: string, options?: any): Promise<string>;
    body(data: any): this;
    getBody(): any;
    onEnd(cb: () => Promise<void> | void): this;
    isDone(): boolean;
    isHeadersSent(): boolean;
    cookie(name: string, value: string | null, opts?: TsED.SetCookieOpts): this;
    protected formatHeader(key: string, item: any): any;
    protected json(data: any): this;
    protected buffer(data: any): void;
    protected end(data?: string | Buffer): void;
}
```

<!-- Description -->

## Description

Platform Response abstraction layer.

<!-- Members -->

## readonly $ctx

```ts
readonly $ctx: PlatformContext;
```

## data

```ts
data: any;
```

## get request

```ts
get request(): PlatformRequest;
```

The current [PlatformRequest](/ai/api/platform/platform-http/types/common/services/class-platform-request.md).

## get raw

```ts
get raw(): Res;
```

## get statusCode

```ts
get statusCode(): any;
```

Get the current statusCode

## get locals

```ts
get locals(): any;
```

An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.

## get response

```ts
get response(): Res;
```

Return the original response framework instance

## get res

```ts
get res(): ServerResponse<import("http").IncomingMessage>;
```

Return the original response node.js instance

## get

```ts
get(name: string): any;
```

Returns the HTTP response header specified by field. The match is case-insensitive.

```typescript
response.get('Content-Type') // => "text/plain"
```

## getHeaders

```ts
getHeaders(): OutgoingHttpHeaders;
```

## getResponse

```ts
getResponse<R = Res>(): R;
```

Return the Framework response object (express, koa, etc...)

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

## setHeaders

```ts
setHeaders(headers: OutgoingHttpHeaders): this;
```

Set header `field` to `val`, or pass
an object of header fields.

Examples:

```typescript
response.setHeaders({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
```

Aliased as `res.header()`.

## setHeader

```ts
setHeader(key: string, item: any): this;
```

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

## contentLength

```ts
contentLength(length: number): this;
```

## getContentLength

```ts
getContentLength(): number | undefined;
```

## getContentType

```ts
getContentType(): any;
```

## attachment

```ts
attachment(filename: string): this;
```

Sets the HTTP response Content-Disposition header field to “attachment”.
If a filename is given, then it sets the Content-Type based on the extension name via res.type(), and sets the Content-Disposition “filename=” parameter.

```typescript
res.attachment()
// Content-Disposition: attachment

res.attachment('path/to/logo.png')
// Content-Disposition: attachment; filename="logo.png"
// Content-Type: image/png
```

## redirect

```ts
redirect(status: number, url: string): this;
```

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an [HTTP status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
If not specified, status defaults to `302 Found`.

## location

```ts
location(location: string): this;
```

Sets the response Location HTTP header to the specified path parameter.

## stream

```ts
stream(data: any): this;
```

Stream the given data.

## render

```ts
render(path: string, options?: any): Promise<string>;
```

Renders a view and sends the rendered HTML string to the client.

## body

```ts
body(data: any): this;
```

Send any data to your consumer.

This method accept a ReadableStream, a plain object, boolean, string, number, null and undefined data.
It chooses the better way to send the data.

## getBody

```ts
getBody(): any;
```

## onEnd

```ts
onEnd(cb: () => Promise<void> | void): this;
```

Add a listener to handler the end of the request/response.

## isDone

```ts
isDone(): boolean;
```

## isHeadersSent

```ts
isHeadersSent(): boolean;
```

## cookie

```ts
cookie(name: string, value: string | null, opts?: TsED.SetCookieOpts): this;
```

## protected formatHeader

```ts
protected formatHeader(key: string, item: any): any;
```

## protected json

```ts
protected json(data: any): this;
```

## protected buffer

```ts
protected buffer(data: any): void;
```

## protected end

```ts
protected end(data?: string | Buffer): void;
```
