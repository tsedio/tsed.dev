---
url: /api/platform/platform-http/types/testing/class-platform-test.md
description: api documentation of PlatformTest from @tsed/platform-http
---

## Usage

```typescript
import { PlatformTest } from "@tsed/platform/platform-http/src/testing/PlatformTest";
```

> See [/packages/platform/platform-http/src/testing/PlatformTest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/testing/PlatformTest.ts#L0-L0).

## Overview

```ts
class PlatformTest extends DITest {
    static create(settings?: Partial<TsED.Configuration>): Promise<void>;
    static createInjector(settings?: Partial<TsED.Configuration>): InjectorService;
    static bootstrap(settings?: Partial<PlatformBuilderSettings & {
        listen: boolean;
    }>): () => Promise<void>;
    static bootstrap(mod: any, settings?: Partial<PlatformBuilderSettings & {
        listen: boolean;
    }>): () => Promise<void>;
    static inject<T>(targets: any[], func: (...args: any[]) => Promise<T> | T): () => Promise<T>;
    static callback(): RequestListener<typeof IncomingMessage, typeof ServerResponse>;
    static createRequest(options?: any): any;
    static createResponse(options?: any): any;
    static createRequestContext(options?: Partial<PlatformContextOptions & any>): PlatformContext<import("../index.js").PlatformRequest<any>, import("../index.js").PlatformResponse<any>>;
}
```

## static create

```ts
static create(settings?: Partial<TsED.Configuration>): Promise<void>;
```

## static createInjector

```ts
static createInjector(settings?: Partial<TsED.Configuration>): InjectorService;
```

Create a new injector with the right default services

## static bootstrap

```ts
static bootstrap(settings?: Partial<PlatformBuilderSettings & {
     listen: boolean;
 }>): () => Promise<void>;
```

Load the server silently without listening port and configure it on test profile.

## static bootstrap

```ts
static bootstrap(mod: any, settings?: Partial<PlatformBuilderSettings & {
     listen: boolean;
 }>): () => Promise<void>;
```

## static inject

```ts
static inject<T>(targets: any[], func: (...args: any[]) => Promise<T> | T): () => Promise<T>;
```

It injects services into the test function where you can alter, spy on, and manipulate them.

The inject function has two parameters

* an array of Service dependency injection tokens,
* a test function whose parameters correspond exactly to each item in the injection token array.

## static callback

```ts
static callback(): RequestListener<typeof IncomingMessage, typeof ServerResponse>;
```

Return the raw application (express or koa).
Use this callback with SuperTest.

```typescript
let request: SuperTest.Agent;
beforeEach(PlatformTest.bootstrap(Server, {
  mount: {
    "/rest": [ProductsController]
  }
}));
beforeEach(() => {
  request = SuperTest(PlatformTest.callback());
});
```

## static createRequest

```ts
static createRequest(options?: any): any;
```

## static createResponse

```ts
static createResponse(options?: any): any;
```

## static createRequestContext

```ts
static createRequestContext(options?: Partial<PlatformContextOptions & any>): PlatformContext<import("../index.js").PlatformRequest<any>, import("../index.js").PlatformResponse<any>>;
```
