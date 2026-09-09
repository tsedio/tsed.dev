---
url: /api/platform/platform-views/types/services/class-platform-views.md
description: api documentation of PlatformViews from @tsed/platform-views
---

## Usage

```typescript
import { PlatformViews } from "@tsed/platform-views";
```

> See [/packages/platform/platform-views/src/services/PlatformViews.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-views/src/services/PlatformViews.ts#L0-L0).

## Overview

```ts
class PlatformViews {
    readonly root: string;
    readonly cache: boolean | undefined;
    readonly disabled: string | boolean;
    readonly viewEngine: string;
    protected env: Env | undefined;
    protected extensionsOptions: PlatformViewsExtensionsTypes;
    protected engineOptions: Record<string, PlatformViewsEngineOptions>;
    $onInit(): Promise<void>;
    loadEngines(): Promise<void>;
    getEngines(): {
        extension: string;
        engine: PlatformViewEngine;
    }[];
    registerEngine(engineType: string, engine: PlatformViewEngine): this;
    getEngine(type: string): PlatformViewEngine | undefined;
    getEngineOptions(engineType: string): PlatformViewsEngineOptions;
    render(viewPath: string, options?: any): Promise<string | PlatformViewWritableStream>;
    protected getExtension(viewPath: string): string;
    protected resolve(viewPath: string): {
        path: string;
        extension: string;
    };
}
```

## readonly root

```ts
readonly root: string;
```

## readonly cache

```ts
readonly cache: boolean | undefined;
```

## readonly disabled

```ts
readonly disabled: string | boolean;
```

## readonly viewEngine

```ts
readonly viewEngine: string;
```

## protected env

```ts
protected env: Env | undefined;
```

## protected extensionsOptions

```ts
protected extensionsOptions: PlatformViewsExtensionsTypes;
```

## protected engineOptions

```ts
protected engineOptions: Record<string, PlatformViewsEngineOptions>;
```

## $onInit

```ts
$onInit(): Promise<void>;
```

## loadEngines

```ts
loadEngines(): Promise<void>;
```

## getEngines

```ts
getEngines(): {
     extension: string;
     engine: PlatformViewEngine;
 }[];
```

## registerEngine

```ts
registerEngine(engineType: string, engine: PlatformViewEngine): this;
```

## getEngine

```ts
getEngine(type: string): PlatformViewEngine | undefined;
```

## getEngineOptions

```ts
getEngineOptions(engineType: string): PlatformViewsEngineOptions;
```

## render

```ts
render(viewPath: string, options?: any): Promise<string | PlatformViewWritableStream>;
```

## protected getExtension

```ts
protected getExtension(viewPath: string): string;
```

## protected resolve

```ts
protected resolve(viewPath: string): {
     path: string;
     extension: string;
 };
```
