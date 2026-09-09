---
url: >-
  /api/platform/platform-serverless-http/types/builder/class-platform-serverless-http.md
description: >-
  api documentation of PlatformServerlessHttp from
  @tsed/platform-serverless-http
---

## Usage

```typescript
import { PlatformServerlessHttp } from "@tsed/platform-serverless-http";
```

> See [/packages/platform/platform-serverless-http/src/builder/PlatformServerlessHttp.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless-http/src/builder/PlatformServerlessHttp.ts#L0-L0).

## Overview

```ts
class PlatformServerlessHttp {
    static bootstrap(settings: PlatformBuilderSettings<any>): PlatformBuilder & {
        handler(): Handler;
    };
    static bootstrap(module: Type<any>, settings?: PlatformBuilderSettings<any>): PlatformBuilder & {
        handler(): Handler;
    };
}
```

## static bootstrap

```ts
static bootstrap(settings: PlatformBuilderSettings<any>): PlatformBuilder & {
     handler(): Handler;
 };
```

## static bootstrap

```ts
static bootstrap(module: Type<any>, settings?: PlatformBuilderSettings<any>): PlatformBuilder & {
     handler(): Handler;
 };
```
