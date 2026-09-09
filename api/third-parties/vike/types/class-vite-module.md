---
url: /api/third-parties/vike/types/class-vite-module.md
description: api documentation of ViteModule from @tsed/vike
---

## Usage

```typescript
import { ViteModule } from "@tsed/vike";
```

> See [/packages/third-parties/vike/src/ViteModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/vike/src/ViteModule.ts#L0-L0).

## Overview

```ts
class ViteModule {
    protected app: PlatformApplication;
    protected platformView: PlatformViews;
    protected viteService: ViteService;
    protected viteServer: VITE_SERVER;
    $onInit(): void;
    $afterInit(): void;
    $afterRoutesInit(): PlatformApplication<TsED.Application>;
}
```

## protected app

```ts
protected app: PlatformApplication;
```

## protected platformView

```ts
protected platformView: PlatformViews;
```

## protected viteService

```ts
protected viteService: ViteService;
```

## protected viteServer

```ts
protected viteServer: VITE_SERVER;
```

## $onInit

```ts
$onInit(): void;
```

## $afterInit

```ts
$afterInit(): void;
```

## $afterRoutesInit

```ts
$afterRoutesInit(): PlatformApplication<TsED.Application>;
```
