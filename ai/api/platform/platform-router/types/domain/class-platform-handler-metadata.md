---
title: PlatformHandlerMetadata from @tsed/platform-router
description: api documentation of PlatformHandlerMetadata from @tsed/platform-router
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformHandlerMetadata class
---
# PlatformHandlerMetadata - @tsed/platform-router

## Usage

```typescript
import { PlatformHandlerMetadata } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformHandlerMetadata.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformHandlerMetadata.ts#L0-L0).

## Overview

```ts
class PlatformHandlerMetadata {
    path: SinglePathType;
    readonly provider?: Provider;
    readonly propertyKey: string | symbol;
    readonly type: PlatformHandlerType;
    readonly hasNextFunction: boolean;
    readonly opts: PlatformHandlerMetadataOpts;
    compiledHandler: ($ctx: DIContext) => any;
    constructor(props: PlatformHandlerMetadataProps);
    get target(): any;
    get token(): any;
    get handler(): any;
    get scope(): ProviderScope;
    get hasErrorParam(): boolean;
    get store(): JsonMethodStore;
    static from(input: any, opts?: PlatformHandlerMetadataOpts): PlatformHandlerMetadata;
    getParams(): JsonParameterStore[];
    hasParamType(paramType: any): boolean;
    isInjectable(): boolean;
    isRawFn(): boolean;
    isEndpoint(): boolean;
    isCtxFn(): boolean;
    isResponseFn(): boolean;
    isRawMiddleware(): boolean;
    toString(): string;
}
```

<!-- Members -->

## path

```ts
path: SinglePathType;
```

## readonly provider

```ts
readonly provider?: Provider;
```

## readonly propertyKey

```ts
readonly propertyKey: string | symbol;
```

## readonly type

```ts
readonly type: PlatformHandlerType;
```

## readonly hasNextFunction

```ts
readonly hasNextFunction: boolean;
```

## readonly opts

```ts
readonly opts: PlatformHandlerMetadataOpts;
```

## compiledHandler:

```ts
compiledHandler: ($ctx: DIContext) => any;
```

## get target

```ts
get target(): any;
```

## get token

```ts
get token(): any;
```

## get handler

```ts
get handler(): any;
```

## get scope

```ts
get scope(): ProviderScope;
```

## get hasErrorParam

```ts
get hasErrorParam(): boolean;
```

## get store

```ts
get store(): JsonMethodStore;
```

## static from

```ts
static from(input: any, opts?: PlatformHandlerMetadataOpts): PlatformHandlerMetadata;
```

## getParams

```ts
getParams(): JsonParameterStore[];
```

## hasParamType

```ts
hasParamType(paramType: any): boolean;
```

## isInjectable

```ts
isInjectable(): boolean;
```

## isRawFn

```ts
isRawFn(): boolean;
```

## isEndpoint

```ts
isEndpoint(): boolean;
```

## isCtxFn

```ts
isCtxFn(): boolean;
```

## isResponseFn

```ts
isResponseFn(): boolean;
```

## isRawMiddleware

```ts
isRawMiddleware(): boolean;
```

Checks if the handler is a raw middleware function.
Raw middleware functions are non-injectable handlers of type RAW_FN or RAW_ERR_FN.

## toString

```ts
toString(): string;
```
