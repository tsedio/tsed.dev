---
url: /api/platform/platform-params/types/builder/class-platform-params.md
description: api documentation of PlatformParams from @tsed/platform-params
---

## Usage

```typescript
import { PlatformParams } from "@tsed/platform-params";
```

> See [/packages/platform/platform-params/src/builder/PlatformParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/builder/PlatformParams.ts#L0-L0).

## Overview

```ts
class PlatformParams {
    getPipes(param: JsonParameterStore): PipeMethods<any, any>[];
    compileHandler<Context extends DIContext = DIContext>({ propertyKey, token, handler }: {
        propertyKey?: string | symbol;
        token?: any;
        handler?: any;
    }): PlatformParamsCallback<Context>;
    compile<Context extends DIContext = DIContext>(entity: JsonMethodStore): PlatformParamsCallback<Context>;
    getArg<Context extends DIContext = DIContext>(scope: PlatformParamsScope<Context>, pipes: PipeMethods[], param: JsonParameterStore): Promise<any>;
}
```

## Description

Platform Params abstraction layer.

## getPipes

```ts
getPipes(param: JsonParameterStore): PipeMethods<any, any>[];
```

## compileHandler

```ts
compileHandler<Context extends DIContext = DIContext>({ propertyKey, token, handler }: {
     propertyKey?: string | symbol;
     token?: any;
     handler?: any;
 }): PlatformParamsCallback<Context>;
```

Return a handler with injectable parameters

## compile

```ts
compile<Context extends DIContext = DIContext>(entity: JsonMethodStore): PlatformParamsCallback<Context>;
```

## getArg

```ts
getArg<Context extends DIContext = DIContext>(scope: PlatformParamsScope<Context>, pipes: PipeMethods[], param: JsonParameterStore): Promise<any>;
```
