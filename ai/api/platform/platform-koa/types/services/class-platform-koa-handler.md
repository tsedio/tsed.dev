---
title: PlatformKoaHandler from @tsed/platform-koa
description: api documentation of PlatformKoaHandler from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformKoaHandler class
---
# PlatformKoaHandler - @tsed/platform-koa

## Usage

```typescript
import { PlatformKoaHandler } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/services/PlatformKoaHandler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/services/PlatformKoaHandler.ts#L0-L0).

## Overview

```ts
class PlatformKoaHandler extends PlatformHandler {
    onRequest(handler: PlatformParamsCallback, $ctx: PlatformContext): Promise<any>;
    flush($ctx: PlatformContext): Promise<void>;
}
```

<!-- Members -->

## onRequest

```ts
onRequest(handler: PlatformParamsCallback, $ctx: PlatformContext): Promise<any>;
```

## flush

```ts
flush($ctx: PlatformContext): Promise<void>;
```
