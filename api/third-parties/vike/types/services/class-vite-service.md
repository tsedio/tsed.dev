---
url: /api/third-parties/vike/types/services/class-vite-service.md
description: api documentation of ViteService from @tsed/vike
---

## Usage

```typescript
import { ViteService } from "@tsed/vike";
```

> See [/packages/third-parties/vike/src/services/ViteService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/vike/src/services/ViteService.ts#L0-L0).

## Overview

```ts
class ViteService {
    static moduleName: string;
    protected config: ViteConfig;
    render(viewPath: string, { $ctx, ...opts }: {
        $ctx: PlatformContext;
    } & Record<string, any>): Promise<string | {
        pipe(stream: Writable): void;
    } | undefined>;
}
```

## static moduleName

```ts
static moduleName: string;
```

## protected config

```ts
protected config: ViteConfig;
```

## render

```ts
render(viewPath: string, { $ctx, ...opts }: {
     $ctx: PlatformContext;
 } & Record<string, any>): Promise<string | {
     pipe(stream: Writable): void;
 } | undefined>;
```
