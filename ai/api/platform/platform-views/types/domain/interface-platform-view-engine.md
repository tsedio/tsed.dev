---
title: PlatformViewEngine from @tsed/platform-views
description: api documentation of PlatformViewEngine from @tsed/platform-views
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformViewEngine interface
---
# PlatformViewEngine - @tsed/platform-views

## Usage

```typescript
import { PlatformViewEngine } from "@tsed/platform-views";
```

> See [/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts#L0-L0).

## Overview

```ts
interface PlatformViewEngine {
    options: PlatformViewsEngineOptions;
    render(path: string, options: PlatformRenderOptions): Promise<string | PlatformViewWritableStream>;
}
```

<!-- Members -->

## options

```ts
options: PlatformViewsEngineOptions;
```

## render

```ts
render(path: string, options: PlatformRenderOptions): Promise<string | PlatformViewWritableStream>;
```
