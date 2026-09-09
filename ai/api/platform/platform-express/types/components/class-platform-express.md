---
title: PlatformExpress from @tsed/platform-express
description: api documentation of PlatformExpress from @tsed/platform-express
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformExpress class
---
# PlatformExpress - @tsed/platform-express

## Usage

```typescript
import { PlatformExpress } from "@tsed/platform-express";
```

> See [/packages/platform/platform-express/src/components/PlatformExpress.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-express/src/components/PlatformExpress.ts#L0-L0).

## Overview

```ts
class PlatformExpress extends PlatformAdapter<Express.Application> {
    readonly NAME = "express";
    static create(settings: Partial<TsED.Configuration>): PlatformBuilder<Express.Application>;
    static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<Express.Application>;
    static bootstrap(settings: Partial<TsED.Configuration>): Promise<PlatformBuilder<Express.Application>>;
    static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<Express.Application>>;
    beforeLoadRoutes(): Promise<void>;
    afterLoadRoutes(): Promise<void>;
    mapLayers(layers: PlatformLayer[]): void;
    mapHandler(handler: Function, metadata: PlatformHandlerMetadata): (error: unknown, req: any, res: any, next: any) => Promise<Promise<any>>;
    useContext(): void;
    createApp(): {
        app: Express.Express;
        callback: () => Express.Express;
    };
    statics(endpoint: string | RegExp, options: PlatformStaticsOptions): (request: any, response: any, next: any) => void;
    bodyParser(type: "json" | "text" | "urlencoded", additionalOptions?: any): any;
}
```

<!-- Members -->

## readonly NAME

```ts
readonly NAME = "express";
```

## static create

```ts
static create(settings: Partial<TsED.Configuration>): PlatformBuilder<Express.Application>;
```

Create new serverless application. In this mode, the component scan are disabled.

## static create

```ts
static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<Express.Application>;
```

## static bootstrap

```ts
static bootstrap(settings: Partial<TsED.Configuration>): Promise<PlatformBuilder<Express.Application>>;
```

Bootstrap a server application

## static bootstrap

```ts
static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<Express.Application>>;
```

## beforeLoadRoutes

```ts
beforeLoadRoutes(): Promise<void>;
```

## afterLoadRoutes

```ts
afterLoadRoutes(): Promise<void>;
```

## mapLayers

```ts
mapLayers(layers: PlatformLayer[]): void;
```

## mapHandler

```ts
mapHandler(handler: Function, metadata: PlatformHandlerMetadata): (error: unknown, req: any, res: any, next: any) => Promise<Promise<any>>;
```

## useContext

```ts
useContext(): void;
```

## createApp

```ts
createApp(): {
     app: Express.Express;
     callback: () => Express.Express;
 };
```

## statics

```ts
statics(endpoint: string | RegExp, options: PlatformStaticsOptions): (request: any, response: any, next: any) => void;
```

## bodyParser

```ts
bodyParser(type: "json" | "text" | "urlencoded", additionalOptions?: any): any;
```
