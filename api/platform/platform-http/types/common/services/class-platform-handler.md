---
url: /api/platform/platform-http/types/common/services/class-platform-handler.md
description: api documentation of PlatformHandler from @tsed/platform-http
---

## Usage

```typescript
import { PlatformHandler } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/PlatformHandler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/PlatformHandler.ts#L0-L0).

## Overview

```ts
class PlatformHandler {
    protected responseFilter: PlatformResponseFilter;
    protected platformParams: PlatformParams;
    protected platformExceptions: PlatformExceptions;
    protected platformRouters: PlatformRouters;
    constructor();
    createHandler(handlerMetadata: PlatformHandlerMetadata): any;
    createCustomHandler(provider: Provider, propertyKey: string): any;
    onRequest(handler: PlatformParamsCallback, $ctx: PlatformContext): Promise<any>;
    onResponse({ status, data, headers }: AnyPromiseResult, $ctx: PlatformContext): void;
    flush($ctx: PlatformContext): Promise<void>;
}
```

## Description

Platform Handler abstraction layer. Wrap original class method to a pure platform handler (Express, Koa, etc...).

## protected responseFilter

```ts
protected responseFilter: PlatformResponseFilter;
```

## protected platformParams

```ts
protected platformParams: PlatformParams;
```

## protected platformExceptions

```ts
protected platformExceptions: PlatformExceptions;
```

## protected platformRouters

```ts
protected platformRouters: PlatformRouters;
```

## createHandler

```ts
createHandler(handlerMetadata: PlatformHandlerMetadata): any;
```

## createCustomHandler

```ts
createCustomHandler(provider: Provider, propertyKey: string): any;
```

## onRequest

```ts
onRequest(handler: PlatformParamsCallback, $ctx: PlatformContext): Promise<any>;
```

Call handler when a request his handle

## onResponse

```ts
onResponse({ status, data, headers }: AnyPromiseResult, $ctx: PlatformContext): void;
```

## flush

```ts
flush($ctx: PlatformContext): Promise<void>;
```

Send the response to the consumer.
