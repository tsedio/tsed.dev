---
title: FakeAdapter from @tsed/platform-http
description: api documentation of FakeAdapter from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation FakeAdapter class
---
# FakeAdapter - @tsed/platform-http

## Usage

```typescript
import { FakeAdapter } from "@tsed/platform/platform-http/src/testing/FakeAdapter";
```

> See [/packages/platform/platform-http/src/testing/FakeAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/testing/FakeAdapter.ts#L0-L0).

## Overview

```ts
class FakeAdapter extends PlatformAdapter<any> {
    readonly NAME: string;
    providers: ProviderOpts[];
    static createFakeRawDriver(): {
        (): void;
        use: (this: any) => any;
        all: (this: any) => any;
        get: (this: any) => any;
        patch: (this: any) => any;
        post: (this: any) => any;
        put: (this: any) => any;
        head: (this: any) => any;
        delete: (this: any) => any;
        options: (this: any) => any;
    };
    createApp(): {
        app: any;
        callback(): any;
    };
    multipart(options: TsED.MultipartFileOptions): TsED.MultipartFileInstance;
    statics(endpoint: string, options: PlatformStaticsOptions): any;
    bodyParser(type: string): any;
    mapLayers(layers: PlatformLayer[]): void;
    mapHandler(handler: PlatformContextHandler<PlatformContext>): PlatformContextHandler<PlatformContext<import("../index.js").PlatformRequest<any>, import("../index.js").PlatformResponse<any>>>;
    useContext(): void;
}
```

<!-- Members -->

## readonly NAME

```ts
readonly NAME: string;
```

## providers

```ts
providers: ProviderOpts[];
```

## static createFakeRawDriver

```ts
static createFakeRawDriver(): {
     (): void;
     use: (this: any) => any;
     all: (this: any) => any;
     get: (this: any) => any;
     patch: (this: any) => any;
     post: (this: any) => any;
     put: (this: any) => any;
     head: (this: any) => any;
     delete: (this: any) => any;
     options: (this: any) => any;
 };
```

## createApp

```ts
createApp(): {
     app: any;
     callback(): any;
 };
```

## multipart

```ts
multipart(options: TsED.MultipartFileOptions): TsED.MultipartFileInstance;
```

## statics

```ts
statics(endpoint: string, options: PlatformStaticsOptions): any;
```

## bodyParser

```ts
bodyParser(type: string): any;
```

## mapLayers

```ts
mapLayers(layers: PlatformLayer[]): void;
```

## mapHandler

```ts
mapHandler(handler: PlatformContextHandler<PlatformContext>): PlatformContextHandler<PlatformContext<import("../index.js").PlatformRequest<any>, import("../index.js").PlatformResponse<any>>>;
```

## useContext

```ts
useContext(): void;
```
