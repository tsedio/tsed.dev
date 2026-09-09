---
title: PlatformServerlessTest from @tsed/platform-serverless-testing
description: api documentation of PlatformServerlessTest from @tsed/platform-serverless-testing
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformServerlessTest class
---
# PlatformServerlessTest - @tsed/platform-serverless-testing

## Usage

```typescript
import { PlatformServerlessTest } from "@tsed/platform-serverless-testing";
```

> See [/packages/platform/platform-serverless-testing/src/PlatformServerlessTest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless-testing/src/PlatformServerlessTest.ts#L0-L0).

## Overview

```ts
class PlatformServerlessTest extends DITest {
    static callbacks: Record<string, APIGatewayProxyHandler>;
    static instance: any;
    static request: typeof LambdaClientRequest;
    static bootstrap(serverless: {
        bootstrap: (server: Type<any>, settings: TsED.Configuration) => PlatformBuilder;
    }, { server, ...settings }: PlatformBuilderSettings<any> & {
        server: Type<any>;
    }): () => Promise<any>;
    static bootstrap(serverless: {
        bootstrap: (settings: Partial<TsED.Configuration> & {
            lambda?: Type[];
        }) => any;
    }, { server, ...settings }: PlatformBuilderSettings<any>): () => Promise<any>;
    static reset(): Promise<void>;
}
```

<!-- Members -->

## static callbacks

```ts
static callbacks: Record<string, APIGatewayProxyHandler>;
```

## static instance

```ts
static instance: any;
```

## static request

```ts
static request: typeof LambdaClientRequest;
```

## static bootstrap

```ts
static bootstrap(serverless: {
     bootstrap: (server: Type<any>, settings: TsED.Configuration) => PlatformBuilder;
 }, { server, ...settings }: PlatformBuilderSettings<any> & {
     server: Type<any>;
 }): () => Promise<any>;
```

## static bootstrap

```ts
static bootstrap(serverless: {
     bootstrap: (settings: Partial<TsED.Configuration> & {
         lambda?: Type[];
     }) => any;
 }, { server, ...settings }: PlatformBuilderSettings<any>): () => Promise<any>;
```

## static reset

```ts
static reset(): Promise<void>;
```

Resets the test injector of the test context, so it won't pollute your next test. Call this in your `tearDown` logic.
