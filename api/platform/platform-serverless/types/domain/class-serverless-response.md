---
url: /api/platform/platform-serverless/types/domain/class-serverless-response.md
description: api documentation of ServerlessResponse from @tsed/platform-serverless
---

## Usage

```typescript
import { ServerlessResponse } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/domain/ServerlessResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/domain/ServerlessResponse.ts#L0-L0).

## Overview

```ts
class ServerlessResponse<Event extends object = APIGatewayProxyEvent> {
    protected $ctx: ServerlessContext<Event>;
    constructor($ctx: ServerlessContext<Event>);
    get event(): Event;
    get raw(): Event;
    get request(): import("./ServerlessRequest.js").ServerlessRequest<Event>;
    get statusCode(): number;
    set statusCode(status: number);
    get locals(): Record<string, any>;
    get isHeadersSent(): boolean;
    getStatus(): number;
    status(status: number): this;
    set(name: string, value: any): this;
    get(name: string): string | number | boolean | undefined;
    getHeaders(): Record<string, HeaderValue>;
    hasStatus(): boolean;
    setHeaders(headers: Record<string, HeaderValue>): this;
    setHeader(key: string, item: HeaderValue | null | undefined): this;
    contentType(contentType: string): this;
    contentLength(length: number): this;
    getContentLength(): number | undefined;
    getContentType(): string;
    redirect(status: number, url: string): this;
    location(url: string): this;
    body(body: any): this;
    getBody(): any;
    isDone(): boolean;
    destroy(): void;
}
```

## protected $ctx

```ts
protected $ctx: ServerlessContext<Event>;
```

## get event

```ts
get event(): Event;
```

## get raw

```ts
get raw(): Event;
```

## get request

```ts
get request(): import("./ServerlessRequest.js").ServerlessRequest<Event>;
```

## get statusCode

```ts
get statusCode(): number;
```

Get the current statusCode

## set statusCode

```ts
set statusCode(status: number);
```

## get locals

```ts
get locals(): Record<string, any>;
```

An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.

## get isHeadersSent

```ts
get isHeadersSent(): boolean;
```

## getStatus

```ts
getStatus(): number;
```

## status

```ts
status(status: number): this;
```

Sets the HTTP status for the response.

## set

```ts
set(name: string, value: any): this;
```

## get

```ts
get(name: string): string | number | boolean | undefined;
```

Returns the HTTP response header specified by field. The match is case-insensitive.

```typescript
response.get('Content-Type') // => "text/plain"
```

## getHeaders

```ts
getHeaders(): Record<string, HeaderValue>;
```

## hasStatus

```ts
hasStatus(): boolean;
```

## setHeaders

```ts
setHeaders(headers: Record<string, HeaderValue>): this;
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
setHeader(key: string, item: HeaderValue | null | undefined): this;
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
getContentType(): string;
```

## redirect

```ts
redirect(status: number, url: string): this;
```

Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an [HTTP status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
If not specified, status defaults to `302 Found`.

## location

```ts
location(url: string): this;
```

Sets the response Location HTTP header to the specified path parameter.

## body

```ts
body(body: any): this;
```

Send any data to your consumer.

This method accept a ReadableStream, a plain object, boolean, string, number, null and undefined data.
It choose the better way to send the data.

## getBody

```ts
getBody(): any;
```

## isDone

```ts
isDone(): boolean;
```

## destroy

```ts
destroy(): void;
```
