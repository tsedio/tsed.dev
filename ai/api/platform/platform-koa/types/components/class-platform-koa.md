---
title: PlatformKoa from @tsed/platform-koa
description: api documentation of PlatformKoa from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformKoa class
---
# PlatformKoa - @tsed/platform-koa

## Usage

```typescript
import { PlatformKoa } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/components/PlatformKoa.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/components/PlatformKoa.ts#L0-L0).

## Overview

```ts
class PlatformKoa extends PlatformAdapter<Koa> {
    readonly NAME = "koa";
    static create(settings: Partial<TsED.Configuration>): PlatformBuilder<Koa>;
    static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<Koa>;
    static bootstrap(settings: Partial<TsED.Configuration>): Promise<PlatformBuilder<Koa>>;
    static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<Koa>>;
    onInit(): void;
    mapLayers(layers: PlatformLayer[]): void;
    mapHandler(handler: Function, metadata: PlatformHandlerMetadata): (koaContext: Koa.Context, next: Koa.Next) => Promise<any>;
    useContext(): void;
    createApp(): {
        app: Koa<Koa.DefaultState, Koa.DefaultContext>;
        callback(): (req: import("http").IncomingMessage | import("http2").Http2ServerRequest, res: import("http").ServerResponse | import("http2").Http2ServerResponse) => Promise<void>;
    };
    statics(endpoint: string, options: PlatformStaticsOptions): any;
    bodyParser(_: "json" | "urlencoded" | "raw" | "text", additionalOptions?: any): any;
}
```

<!-- Members -->

## readonly NAME

```ts
readonly NAME = "koa";
```

## static create

```ts
static create(settings: Partial<TsED.Configuration>): PlatformBuilder<Koa>;
```

Create new serverless application. In this mode, the component scan are disabled.

## static create

```ts
static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<Koa>;
```

## static bootstrap

```ts
static bootstrap(settings: Partial<TsED.Configuration>): Promise<PlatformBuilder<Koa>>;
```

Bootstrap a server application

## static bootstrap

```ts
static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<Koa>>;
```

## onInit

```ts
onInit(): void;
```

## mapLayers

```ts
mapLayers(layers: PlatformLayer[]): void;
```

## mapHandler

```ts
mapHandler(handler: Function, metadata: PlatformHandlerMetadata): (koaContext: Koa.Context, next: Koa.Next) => Promise<any>;
```

## useContext

```ts
useContext(): void;
```

## createApp

```ts
createApp(): {
     app: Koa<Koa.DefaultState, Koa.DefaultContext>;
     callback(): (req: import("http").IncomingMessage | import("http2").Http2ServerRequest, res: import("http").ServerResponse | import("http2").Http2ServerResponse) => Promise<void>;
 };
```

## statics

```ts
statics(endpoint: string, options: PlatformStaticsOptions): any;
```

## bodyParser

```ts
bodyParser(_: "json" | "urlencoded" | "raw" | "text", additionalOptions?: any): any;
```
