---
title: UseBefore from @tsed/platform-middlewares
description: api documentation of UseBefore from @tsed/platform-middlewares
meta:
 - name: keywords
   description: api typescript node.js documentation UseBefore decorator
---
# UseBefore - @tsed/platform-middlewares

## Usage

```typescript
import { UseBefore } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/useBefore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/useBefore.ts#L0-L0).

## Overview

```ts
function UseBefore(...args: any[]): Function;
```

<!-- Description -->

## Description

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when
the base of the requested path matches \`path.

```typescript
@Controller('/')
@UseBefore(Middleware1) // called only one time before all endpoint
export class Ctrl {

   @Get('/')
   @UseBefore(Middleware2)
   get() { }
}
```
