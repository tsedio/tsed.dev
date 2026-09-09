---
title: PlatformRequest from @tsed/platform-http
description: api documentation of PlatformRequest from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformRequest class
---
# PlatformRequest - @tsed/platform-http

## Usage

```typescript
import { PlatformRequest } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/PlatformRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/PlatformRequest.ts#L0-L0).

## Overview

```ts
class PlatformRequest<Req extends {
    [key: string]: any;
} = any> {
    readonly $ctx: PlatformContext;
    constructor($ctx: PlatformContext);
    get response(): PlatformResponse;
    get raw(): Req;
    get secure(): boolean;
    get host(): string;
    get protocol(): string;
    get url(): string;
    get headers(): IncomingHttpHeaders;
    get method(): string;
    get body(): any;
    get rawBody(): any;
    get cookies(): {
        [key: string]: any;
    };
    get params(): {
        [key: string]: any;
    };
    get query(): {
        [key: string]: any;
    };
    get session(): {
        [key: string]: any;
    };
    get files(): any;
    get route(): import("@tsed/platform-router").SinglePathType;
    get request(): Req;
    get req(): IncomingMessage;
    get(name: string): any;
    getHeader(name: string): any;
    accepts(mime: string): string | false;
    accepts(mime: string[]): string[] | false;
    isAborted(): any;
    getRequest<R = Req>(): R;
    getReq(): IncomingMessage;
}
```

<!-- Description -->

## Description

Platform Request abstraction layer.

<!-- Members -->

## \[key: string]

```ts
[key: string]: any;
```

## }

```ts
} = any> {
```

## readonly $ctx

```ts
readonly $ctx: PlatformContext;
```

## get response

```ts
get response(): PlatformResponse;
```

The current [PlatformResponse](/ai/api/platform/platform-http/types/common/services/class-platform-response.md).

## get raw

```ts
get raw(): Req;
```

## get secure

```ts
get secure(): boolean;
```

## get host

```ts
get host(): string;
```

## get protocol

```ts
get protocol(): string;
```

## get url

```ts
get url(): string;
```

Get the url of the request.

Is equivalent of `express.response.originalUrl || express.response.url`.

## get headers

```ts
get headers(): IncomingHttpHeaders;
```

## get method

```ts
get method(): string;
```

## get body

```ts
get body(): any;
```

Contains key-value pairs of data submitted in the request body. By default, it is `undefined`, and is populated when you use
`body-parsing` middleware such as `express.json()` or `express.urlencoded()`.

## get rawBody

```ts
get rawBody(): any;
```

## get cookies

```ts
get cookies(): {
     [key: string]: any;
 };
```

When using `cookie-parser` middleware, this property is an object that contains cookies sent by the request.
If the request contains no cookies, it defaults to `{}`.

## get params

```ts
get params(): {
     [key: string]: any;
 };
```

This property is an object containing properties mapped to the named route `parameters`.
For example, if you have the route `/user/:name`, then the `name` property is available as `req.params.name`.
This object defaults to `{}`.

## get query

```ts
get query(): {
     [key: string]: any;
 };
```

This property is an object containing a property for each query string parameter in the route.
When query parser is set to disabled, it is an empty object `{}`, otherwise it is the result of the configured query parser.

## get session

```ts
get session(): {
     [key: string]: any;
 };
```

This property is an object containing a property for each session attributes set by any code.
It requires to install a middleware like express-session to work.

## get files

```ts
get files(): any;
```

## get route

```ts
get route(): import("@tsed/platform-router").SinglePathType;
```

## get request

```ts
get request(): Req;
```

Return the original request framework instance

## get req

```ts
get req(): IncomingMessage;
```

Return the original request node.js instance

## get

```ts
get(name: string): any;
```

Returns the HTTP request header specified by field. The match is case-insensitive.

```typescript
request.get('Content-Type') // => "text/plain"
```

## getHeader

```ts
getHeader(name: string): any;
```

## accepts

```ts
accepts(mime: string): string | false;
```

Checks if the specified content types are acceptable, based on the request’s Accept HTTP header field. The method returns the best match, or if none of the specified content types is acceptable, returns false (in which case, the application should respond with 406 "Not Acceptable").

The type value may be a single MIME type string (such as “application/json”), an extension name such as “json”, a comma-delimited list, or an array. For a list or array, the method returns the best match (if any).

## accepts

```ts
accepts(mime: string[]): string[] | false;
```

## isAborted

```ts
isAborted(): any;
```

## getRequest

```ts
getRequest<R = Req>(): R;
```

Return the Framework response object (express, koa, etc...)

## getReq

```ts
getReq(): IncomingMessage;
```

Return the Node.js response object
