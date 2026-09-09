---
title: PlatformServerless from @tsed/platform-serverless
description: api documentation of PlatformServerless from @tsed/platform-serverless
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformServerless class
---
# PlatformServerless - @tsed/platform-serverless

## Usage

```typescript
import { PlatformServerless } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/builder/PlatformServerless.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/builder/PlatformServerless.ts#L0-L0).

## Overview

```ts
class PlatformServerless {
    readonly name: string;
    
    get promise(): Promise<any>;
    get injector(): InjectorService;
    get settings(): TsED.Configuration & import("@tsed/di").DIConfiguration;
    static bootstrap(settings?: Partial<TsED.Configuration> & {
        lambda?: Type[];
    }): PlatformServerless;
    static callback(token: Type<any>, propertyKey: string, settings?: Partial<TsED.Configuration>): Handler<ServerlessEvent> | RequestHandler;
    handler(): Handler;
    callbacks(tokens?: Type | Type[], callbacks?: any): Record<string, Handler>;
    ready(): Promise<void>;
    stop(): Promise<void>;
    init(): Promise<any>;
    protected callback(token: Type<any>, propertyKey: string): Handler<ServerlessEvent> | RequestHandler;
    protected initRouter(): Promise<Instance<any>>;
    protected createInjector(settings: any): this;
    protected loadInjector(): Promise<void>;
}
```

<!-- Members -->

## readonly name

```ts
readonly name: string;
```

## get promise

```ts
get promise(): Promise<any>;
```

## get injector

```ts
get injector(): InjectorService;
```

## get settings

```ts
get settings(): TsED.Configuration & import("@tsed/di").DIConfiguration;
```

## static bootstrap

```ts
static bootstrap(settings?: Partial<TsED.Configuration> & {
     lambda?: Type[];
 }): PlatformServerless;
```

## static callback

```ts
static callback(token: Type<any>, propertyKey: string, settings?: Partial<TsED.Configuration>): Handler<ServerlessEvent> | RequestHandler;
```

Create a new handler from the given token and propertyKey. No routing is used here.

## handler

```ts
handler(): Handler;
```

## callbacks

```ts
callbacks(tokens?: Type | Type[], callbacks?: any): Record<string, Handler>;
```

## ready

```ts
ready(): Promise<void>;
```

## stop

```ts
stop(): Promise<void>;
```

## init

```ts
init(): Promise<any>;
```

## protected callback

```ts
protected callback(token: Type<any>, propertyKey: string): Handler<ServerlessEvent> | RequestHandler;
```

## protected initRouter

```ts
protected initRouter(): Promise<Instance<any>>;
```

## protected createInjector

```ts
protected createInjector(settings: any): this;
```

## protected loadInjector

```ts
protected loadInjector(): Promise<void>;
```
