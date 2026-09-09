---
title: PlatformRouter from @tsed/platform-router
description: api documentation of PlatformRouter from @tsed/platform-router
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformRouter class
---
# PlatformRouter - @tsed/platform-router

## Usage

```typescript
import { PlatformRouter } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformRouter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformRouter.ts#L0-L0).

## Overview

```ts
class PlatformRouter {
    readonly layers: PlatformLayer[];
    provider: Provider;
    use(...handlers: any[]): this;
    addRoute(method: string, path: SinglePathType, handlers: any[], opts?: PlatformLayerOptions): this;
    all(path: SinglePathType, ...handlers: any[]): this;
    get(path: SinglePathType, ...handlers: any[]): this;
    post(path: SinglePathType, ...handlers: any[]): this;
    put(path: SinglePathType, ...handlers: any[]): this;
    delete(path: SinglePathType, ...handlers: any[]): this;
    patch(path: SinglePathType, ...handlers: any[]): this;
    head(path: SinglePathType, ...handlers: any[]): this;
    options(path: SinglePathType, ...handlers: any[]): this;
    statics(path: string, options: any): this;
    inspect(): {
        handlers: any[];
        path: any;
        basePath: string;
        method: string;
        opts: {};
    }[];
    isBuilt(): boolean;
}
```

<!-- Members -->

## readonly layers

```ts
readonly layers: PlatformLayer[];
```

## provider

```ts
provider: Provider;
```

## use

```ts
use(...handlers: any[]): this;
```

## addRoute

```ts
addRoute(method: string, path: SinglePathType, handlers: any[], opts?: PlatformLayerOptions): this;
```

## all

```ts
all(path: SinglePathType, ...handlers: any[]): this;
```

## get

```ts
get(path: SinglePathType, ...handlers: any[]): this;
```

## post

```ts
post(path: SinglePathType, ...handlers: any[]): this;
```

## put

```ts
put(path: SinglePathType, ...handlers: any[]): this;
```

## delete

```ts
delete(path: SinglePathType, ...handlers: any[]): this;
```

## patch

```ts
patch(path: SinglePathType, ...handlers: any[]): this;
```

## head

```ts
head(path: SinglePathType, ...handlers: any[]): this;
```

## options

```ts
options(path: SinglePathType, ...handlers: any[]): this;
```

## statics

```ts
statics(path: string, options: any): this;
```

## inspect

```ts
inspect(): {
     handlers: any[];
     path: any;
     basePath: string;
     method: string;
     opts: {};
 }[];
```

## isBuilt

```ts
isBuilt(): boolean;
```
