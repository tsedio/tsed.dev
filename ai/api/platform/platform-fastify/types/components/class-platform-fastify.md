---
title: PlatformFastify from @tsed/platform-fastify
description: api documentation of PlatformFastify from @tsed/platform-fastify
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformFastify class
---
# PlatformFastify - @tsed/platform-fastify

## Usage

```typescript
import { PlatformFastify } from "@tsed/platform-fastify";
```

> See [/packages/platform/platform-fastify/src/components/PlatformFastify.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-fastify/src/components/PlatformFastify.ts#L0-L0).

## Overview

```ts
class PlatformFastify extends PlatformAdapter<FastifyInstance> {
    readonly NAME = "fastify";
    
    static create(settings: Partial<TsED.Configuration>): PlatformBuilder<FastifyInstance>;
    static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<FastifyInstance>;
    static bootstrap(settings: Partial<TsED.Configuration>): Promise<PlatformBuilder<FastifyInstance>>;
    static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<FastifyInstance>>;
    mapLayers(layers: PlatformLayer[]): Promise<void>;
    mapHandler(handler: (...args: any[]) => any, metadata: PlatformHandlerMetadata): (...args: any[]) => any;
    useContext(): Promise<void>;
    createApp(): {
        app: Fastify.FastifyInstance<Fastify.RawServerDefault, Http.IncomingMessage, Http.ServerResponse<Http.IncomingMessage>, Fastify.FastifyBaseLogger, Fastify.FastifyTypeProviderDefault>;
        callback: () => (request: IncomingMessage, response: ServerResponse) => Promise<void>;
    };
    afterLoadRoutes(): Promise<void>;
    getServers(): any[];
    bodyParser(type: string, opts: Record<string, any> | undefined): any;
    statics(endpoint: string, options: PlatformStaticsOptions & FastifyStaticOptions): Promise<void>;
    protected compose(layer: PlatformLayer, wildcard?: string): (req: FastifyRequest, _: FastifyReply) => Promise<Promise<any>>;
    protected resolvePlugins(): Promise<PlatformFastifyPluginLoadingOptions[]>;
}
```

<!-- Members -->

## readonly NAME

```ts
readonly NAME = "fastify";
```

## static create

```ts
static create(settings: Partial<TsED.Configuration>): PlatformBuilder<FastifyInstance>;
```

Create new serverless application. In this mode, the component scan are disabled.

## static create

```ts
static create(module: Type<any>, settings?: Partial<TsED.Configuration>): PlatformBuilder<FastifyInstance>;
```

## static bootstrap

```ts
static bootstrap(settings: Partial<TsED.Configuration>): Promise<PlatformBuilder<FastifyInstance>>;
```

Bootstrap a server application

## static bootstrap

```ts
static bootstrap(module: Type<any>, settings?: Partial<TsED.Configuration>): Promise<PlatformBuilder<FastifyInstance>>;
```

## mapLayers

```ts
mapLayers(layers: PlatformLayer[]): Promise<void>;
```

## mapHandler

```ts
mapHandler(handler: (...args: any[]) => any, metadata: PlatformHandlerMetadata): (...args: any[]) => any;
```

## useContext

```ts
useContext(): Promise<void>;
```

## createApp

```ts
createApp(): {
     app: Fastify.FastifyInstance<Fastify.RawServerDefault, Http.IncomingMessage, Http.ServerResponse<Http.IncomingMessage>, Fastify.FastifyBaseLogger, Fastify.FastifyTypeProviderDefault>;
     callback: () => (request: IncomingMessage, response: ServerResponse) => Promise<void>;
 };
```

## afterLoadRoutes

```ts
afterLoadRoutes(): Promise<void>;
```

## getServers

```ts
getServers(): any[];
```

## bodyParser

```ts
bodyParser(type: string, opts: Record<string, any> | undefined): any;
```

## statics

```ts
statics(endpoint: string, options: PlatformStaticsOptions & FastifyStaticOptions): Promise<void>;
```

## protected compose

```ts
protected compose(layer: PlatformLayer, wildcard?: string): (req: FastifyRequest, _: FastifyReply) => Promise<Promise<any>>;
```

## protected resolvePlugins

```ts
protected resolvePlugins(): Promise<PlatformFastifyPluginLoadingOptions[]>;
```
