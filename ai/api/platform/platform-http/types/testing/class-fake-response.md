---
title: FakeResponse from @tsed/platform-http
description: api documentation of FakeResponse from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation FakeResponse class
---
# FakeResponse - @tsed/platform-http

## Usage

```typescript
import { FakeResponse } from "@tsed/platform/platform-http/src/testing/FakeResponse";
```

> See [/packages/platform/platform-http/src/testing/FakeResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/testing/FakeResponse.ts#L0-L0).

## Overview

```ts
class FakeResponse extends EventEmitter {
    headers: Record<string, unknown>;
    locals: Record<string, unknown>;
    statusCode: number;
    data: any;
    constructor(opts?: {});
    append(field: string, val: string | string[]): this;
    status(code: number): this;
    contentType(content: string): void;
    contentLength(content: number): void;
    cookie(name: string, value: string, options?: TsED.SetCookieOpts): this;
    clearCookie(name: string, options?: TsED.SetCookieOpts): this;
    redirect(status: number, path: string): void;
    location(path: string): void;
    get(key: string): unknown;
    getHeaders(): Record<string, unknown>;
    set(key: string, value: any): this;
    setHeader(key: string, value: any): this;
    send(data: any): void;
    json(data: any): void;
    write(chunk: any): void;
    end(data: any): void;
}
```

<!-- Members -->

## headers

```ts
headers: Record<string, unknown>;
```

## locals

```ts
locals: Record<string, unknown>;
```

## statusCode

```ts
statusCode: number;
```

## data

```ts
data: any;
```

## append

```ts
append(field: string, val: string | string[]): this;
```

## status

```ts
status(code: number): this;
```

## contentType

```ts
contentType(content: string): void;
```

## contentLength

```ts
contentLength(content: number): void;
```

## cookie

```ts
cookie(name: string, value: string, options?: TsED.SetCookieOpts): this;
```

## clearCookie

```ts
clearCookie(name: string, options?: TsED.SetCookieOpts): this;
```

## redirect

```ts
redirect(status: number, path: string): void;
```

## location

```ts
location(path: string): void;
```

## get

```ts
get(key: string): unknown;
```

## getHeaders

```ts
getHeaders(): Record<string, unknown>;
```

## set

```ts
set(key: string, value: any): this;
```

## setHeader

```ts
setHeader(key: string, value: any): this;
```

## send

```ts
send(data: any): void;
```

## json

```ts
json(data: any): void;
```

## write

```ts
write(chunk: any): void;
```

## end

```ts
end(data: any): void;
```
