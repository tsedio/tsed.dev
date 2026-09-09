---
title: PlatformContext from @tsed/platform-http
description: api documentation of PlatformContext from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformContext class
---
# PlatformContext - @tsed/platform-http

## Usage

```typescript
import { PlatformContext } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/domain/PlatformContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/domain/PlatformContext.ts#L0-L0).

## Overview

```ts
class PlatformContext<PReq extends PlatformRequest = PlatformRequest, PRes extends PlatformResponse = PlatformResponse> extends DIContext {
    readonly PLATFORM: string;
    event: IncomingEvent;
    data: any;
    error?: unknown;
    next?: any;
    readonly response: PRes;
    readonly request: PReq;
    endpoint: JsonMethodStore;
    handlerMetadata: PlatformHandlerMetadata;
    constructor(options: PlatformContextOptions);
    get url(): string;
    get app(): PlatformApplication<TsED.Application>;
    start(): Promise<void>;
    finish(): Promise<void>;
    isFinished(): boolean;
    isDone(): any;
    getRequest<Req = any>(): Req;
    getResponse<Res = any>(): Res;
    getReq(): IncomingMessage;
    getRes(): ServerResponse;
    getApp<T = any>(): T;
}
```

<!-- Members -->

## readonly PLATFORM

```ts
readonly PLATFORM: string;
```

## event

```ts
event: IncomingEvent;
```

## data

```ts
data: any;
```

The data return by the previous endpoint if you use multiple handler on the same route. By default data is empty.

## error

```ts
error?: unknown;
```

The error caught by the current handler

## next

```ts
next?: any;
```

## readonly response

```ts
readonly response: PRes;
```

The current [PlatformResponse](/ai/api/platform/platform-http/types/common/services/class-platform-response.md).

## readonly request

```ts
readonly request: PReq;
```

The current [PlatformRequest](/ai/api/platform/platform-http/types/common/services/class-platform-request.md).

## endpoint

```ts
endpoint: JsonMethodStore;
```

The current [JsonMethodStore](/ai/api/specs/schema/types/components/stores/class-json-method-store.md) resolved by Ts.ED during the request.

## handlerMetadata

```ts
handlerMetadata: PlatformHandlerMetadata;
```

The current [PlatformHandlerMetadata](/ai/api/platform/platform-router/types/domain/class-platform-handler-metadata.md) resolved by Ts.ED during the request.

## get url

```ts
get url(): string;
```

## get app

```ts
get app(): PlatformApplication<TsED.Application>;
```

## start

```ts
start(): Promise<void>;
```

## finish

```ts
finish(): Promise<void>;
```

## isFinished

```ts
isFinished(): boolean;
```

## isDone

```ts
isDone(): any;
```

## getRequest

```ts
getRequest<Req = any>(): Req;
```

Return the framework request instance (Express, Koa, etc...)

## getResponse

```ts
getResponse<Res = any>(): Res;
```

Return the framework response instance (Express, Koa, etc...)

## getReq

```ts
getReq(): IncomingMessage;
```

Get Node.js request

## getRes

```ts
getRes(): ServerResponse;
```

Get Node.js response

## getApp

```ts
getApp<T = any>(): T;
```

Return the original application instance.
