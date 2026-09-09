---
url: >-
  /api/platform/platform-middlewares/types/domain/interface-middleware-methods.md
description: api documentation of MiddlewareMethods from @tsed/platform-middlewares
---

## Usage

```typescript
import { MiddlewareMethods } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/domain/MiddlewareMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/domain/MiddlewareMethods.ts#L0-L0).

## Overview

```ts
interface MiddlewareMethods {
    use(...args: any[]): void | any | Promise<any>;
}
```

## use

```ts
use(...args: any[]): void | any | Promise<any>;
```
