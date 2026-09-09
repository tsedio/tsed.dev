---
url: >-
  /api/platform/platform-multer/types/common/middlewares/class-platform-multer-middleware.md
description: api documentation of PlatformMulterMiddleware from @tsed/platform-multer
---

## Usage

```typescript
import { PlatformMulterMiddleware } from "@tsed/platform-multer";
```

> See [/packages/platform/platform-multer/src/common/middlewares/PlatformMulterMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-multer/src/common/middlewares/PlatformMulterMiddleware.ts#L0-L0).

## Overview

```ts
class PlatformMulterMiddleware implements MiddlewareMethods {
    use(ctx: DIContext & {
        endpoint: JsonMethodStore;
    }): Promise<any>;
}
```

## use

```ts
use(ctx: DIContext & {
     endpoint: JsonMethodStore;
 }): Promise<any>;
```
