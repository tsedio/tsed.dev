---
title: PlatformFulmine from @tsed/platform-fulmine
description: api documentation of PlatformFulmine from @tsed/platform-fulmine
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformFulmine class
---
# PlatformFulmine - @tsed/platform-fulmine

## Usage

```typescript
import { PlatformFulmine } from "@tsed/platform-fulmine";
```

> See [/packages/platform/platform-fulmine/src/components/PlatformFulmine.ts](https://github.com/tsedio/tsed/blob/v8.47.1/packages/platform/platform-fulmine/src/components/PlatformFulmine.ts#L0-L0).

## Overview

```ts
class PlatformFulmine extends PlatformExpress {
    readonly NAME = "fulmine";
    static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<any>;
    static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<any>>;
    createApp(): {
        app: any;
        callback: () => any;
    };
    getServers(): any[];
    statics(_endpoint: string, options: PlatformStaticsOptions): (req: any, res: any, next: any) => any;
    bodyParser(type: "json" | "text" | "urlencoded", additionalOptions?: any): any;
}
```

<!-- Description -->

## Description

Ts.ED on [fulmine.js](https://github.com/nigrosimone/fulmine.js), an Express 5 compatible framework on
uWebSockets.js. The Express adapter does the routing; this platform changes what owns the socket: the app
listens on uWebSockets.js itself instead of being passed to `http.createServer()`.

<!-- Members -->

## readonly NAME

```ts
readonly NAME = "fulmine";
```

## static create

```ts
static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<any>;
```

## static bootstrap

```ts
static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<any>>;
```

## createApp

```ts
createApp(): {
     app: any;
     callback: () => any;
 };
```

## getServers

```ts
getServers(): any[];
```

The app is the server: it binds on uWebSockets.js and answers as an `http.Server`. TLS belongs to
uWebSockets.js too, see `fulmine({uwsOptions})`.

## statics

```ts
statics(_endpoint: string, options: PlatformStaticsOptions): (req: any, res: any, next: any) => any;
```

## bodyParser

```ts
bodyParser(type: "json" | "text" | "urlencoded", additionalOptions?: any): any;
```
