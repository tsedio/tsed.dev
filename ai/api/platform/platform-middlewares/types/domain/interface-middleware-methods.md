---
title: MiddlewareMethods from @tsed/platform-middlewares
description: api documentation of MiddlewareMethods from @tsed/platform-middlewares
meta:
 - name: keywords
   description: api typescript node.js documentation MiddlewareMethods interface
---
# MiddlewareMethods - @tsed/platform-middlewares

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

<!-- Members -->

## use

```ts
use(...args: any[]): void | any | Promise<any>;
```
