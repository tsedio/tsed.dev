---
title: PlatformKoaRequest from @tsed/platform-koa
description: api documentation of PlatformKoaRequest from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformKoaRequest class
---
# PlatformKoaRequest - @tsed/platform-koa

## Usage

```typescript
import { PlatformKoaRequest } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/services/PlatformKoaRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/services/PlatformKoaRequest.ts#L0-L0).

## Overview

```ts
class PlatformKoaRequest extends PlatformRequest<Koa.Request> {
    get ctx(): Koa.Context;
    get protocol(): string;
    get host(): string;
    get secure(): boolean;
    get cookies(): {
        [p: string]: any;
    };
    get session(): any;
    getReq(): import("http").IncomingMessage;
}
```

<!-- Members -->

## get ctx

```ts
get ctx(): Koa.Context;
```

## get protocol

```ts
get protocol(): string;
```

## get host

```ts
get host(): string;
```

## get secure

```ts
get secure(): boolean;
```

## get cookies

```ts
get cookies(): {
     [p: string]: any;
 };
```

## get session

```ts
get session(): any;
```

## getReq

```ts
getReq(): import("http").IncomingMessage;
```
