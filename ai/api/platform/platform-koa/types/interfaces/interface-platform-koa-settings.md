---
title: PlatformKoaSettings from @tsed/platform-koa
description: api documentation of PlatformKoaSettings from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformKoaSettings interface
---
# PlatformKoaSettings - @tsed/platform-koa

## Usage

```typescript
import { PlatformKoaSettings } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/interfaces/PlatformKoaSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/interfaces/PlatformKoaSettings.ts#L0-L0).

## Overview

```ts
interface PlatformKoaSettings {
    router?: RouterOptions;
    bodyParser?: ((opts?: Options) => Middleware) | Options;
}
```

<!-- Members -->

## router

```ts
router?: RouterOptions;
```

Koa router options

## bodyParser:

```ts
bodyParser?: ((opts?: Options) => Middleware) | Options;
```

Body parser options
