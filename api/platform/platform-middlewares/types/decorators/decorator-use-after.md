---
url: /api/platform/platform-middlewares/types/decorators/decorator-use-after.md
description: api documentation of UseAfter from @tsed/platform-middlewares
---

## Usage

```typescript
import { UseAfter } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/useAfter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/useAfter.ts#L0-L0).

## Overview

```ts
function UseAfter(...args: any[]): Function;
```

## Description

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when
the base of the requested path matches \`path.

```typescript
@Controller('/')
@UseAfter(Middleware1)
export class Ctrl {

   @Get('/')
   @UseAfter(Middleware2)
   get() { }
}
```
