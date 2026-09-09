---
title: PlatformAdapter from @tsed/platform-http
description: api documentation of PlatformAdapter from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformAdapter class
---
# PlatformAdapter - @tsed/platform-http

## Usage

```typescript
import { PlatformAdapter } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/PlatformAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/PlatformAdapter.ts#L0-L0).

## Overview

```ts
abstract class PlatformAdapter<App = TsED.Application> {
    abstract readonly NAME: string;
    readonly app: PlatformApplication<App>;
    constructor();
    getServers(): CreateServerReturn[];
    onInit(): Promise<void> | void;
    beforeLoadRoutes(): Promise<void> | void;
    afterLoadRoutes(): Promise<void> | void;
    abstract useContext(): Promise<void> | void;
    abstract mapLayers(layer: PlatformLayer[]): void | Promise<void>;
    mapHandler(handler: Function, layer: PlatformHandlerMetadata): Function;
    abstract createApp(): {
        app: App;
        callback(): (req: IncomingMessage, res: ServerResponse) => void;
    };
    abstract statics(endpoint: string, options: PlatformStaticsOptions): any;
    multipart(options: PlatformMulterSettings): PlatformMulter;
    abstract bodyParser(type: string, opts?: Record<string, any>): any;
}
```

<!-- Members -->

## abstract readonly NAME

```ts
abstract readonly NAME: string;
```

## readonly app

```ts
readonly app: PlatformApplication<App>;
```

## getServers

```ts
getServers(): CreateServerReturn[];
```

## onInit

```ts
onInit(): Promise<void> | void;
```

## beforeLoadRoutes

```ts
beforeLoadRoutes(): Promise<void> | void;
```

## afterLoadRoutes

```ts
afterLoadRoutes(): Promise<void> | void;
```

## abstract useContext

```ts
abstract useContext(): Promise<void> | void;
```

create initial context

## abstract mapLayers

```ts
abstract mapLayers(layer: PlatformLayer[]): void | Promise<void>;
```

Map router layer to the targeted framework

## mapHandler

```ts
mapHandler(handler: Function, layer: PlatformHandlerMetadata): Function;
```

Map handler to the targeted framework

## abstract createApp

```ts
abstract createApp(): {
     app: App;
     callback(): (req: IncomingMessage, res: ServerResponse) => void;
 };
```

Return the app instance

## abstract statics

```ts
abstract statics(endpoint: string, options: PlatformStaticsOptions): any;
```

Return the statics middlewares

## multipart

```ts
multipart(options: PlatformMulterSettings): PlatformMulter;
```

Return the multipart middleware

## abstract bodyParser

```ts
abstract bodyParser(type: string, opts?: Record<string, any>): any;
```

Return the body parser for the given
