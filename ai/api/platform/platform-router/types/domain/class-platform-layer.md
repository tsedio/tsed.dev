---
title: PlatformLayer from @tsed/platform-router
description: api documentation of PlatformLayer from @tsed/platform-router
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformLayer class
---
# PlatformLayer - @tsed/platform-router

## Usage

```typescript
import { PlatformLayer } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformLayer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformLayer.ts#L0-L0).

## Overview

```ts
class PlatformLayer {
    provider: Provider;
    path: SinglePathType;
    method: string;
    handlers: PlatformHandlerMetadata[];
    router?: PlatformRouter;
    opts: PlatformLayerOptions;
    layers: PlatformLayer[];
    parent?: PlatformLayer;
    basePath: SinglePathType;
    constructor(props?: Partial<PlatformLayerProps>);
    set(args: PlatformParamsCallback[]): void;
    getArgs(withPath?: true): [SinglePathType, ...PlatformParamsCallback[]];
    getArgs(withPath: false): PlatformParamsCallback[];
    isProvider(): boolean;
    inspect(): {
        basePath: string;
        path: SinglePathType;
        method: string;
        handlers: string[];
        opts: {};
    };
    getBasePath(): string;
    setLayers(layers: PlatformLayer[]): void;
}
```

<!-- Members -->

## provider

```ts
provider: Provider;
```

## path

```ts
path: SinglePathType;
```

## method

```ts
method: string;
```

## handlers

```ts
handlers: PlatformHandlerMetadata[];
```

## router

```ts
router?: PlatformRouter;
```

## opts

```ts
opts: PlatformLayerOptions;
```

## layers

```ts
layers: PlatformLayer[];
```

## parent

```ts
parent?: PlatformLayer;
```

## basePath

```ts
basePath: SinglePathType;
```

## set

```ts
set(args: PlatformParamsCallback[]): void;
```

## getArgs

```ts
getArgs(withPath?: true): [SinglePathType, ...PlatformParamsCallback[]];
```

## getArgs

```ts
getArgs(withPath: false): PlatformParamsCallback[];
```

## isProvider

```ts
isProvider(): boolean;
```

## inspect

```ts
inspect(): {
     basePath: string;
     path: SinglePathType;
     method: string;
     handlers: string[];
     opts: {};
 };
```

## getBasePath

```ts
getBasePath(): string;
```

## setLayers

```ts
setLayers(layers: PlatformLayer[]): void;
```
