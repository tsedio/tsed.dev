---
url: >-
  /api/platform/platform-serverless/types/builder/class-platform-serverless-handler.md
description: api documentation of PlatformServerlessHandler from @tsed/platform-serverless
---

## Usage

```typescript
import { PlatformServerlessHandler } from "@tsed/platform-serverless";
```

> See [/packages/platform/platform-serverless/src/builder/PlatformServerlessHandler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-serverless/src/builder/PlatformServerlessHandler.ts#L0-L0).

## Overview

```ts
class PlatformServerlessHandler {
    protected params: PlatformParams;
    createHandler(token: TokenProvider, propertyKey: string | symbol): ($ctx: ServerlessContext<ServerlessEvent>) => Promise<Promise<unknown>>;
    
}
```

## protected params

```ts
protected params: PlatformParams;
```

## createHandler

```ts
createHandler(token: TokenProvider, propertyKey: string | symbol): ($ctx: ServerlessContext<ServerlessEvent>) => Promise<Promise<unknown>>;
```
