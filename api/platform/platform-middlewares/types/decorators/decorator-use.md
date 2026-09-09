---
url: /api/platform/platform-middlewares/types/decorators/decorator-use.md
description: api documentation of Use from @tsed/platform-middlewares
---

## Usage

```typescript
import { Use } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/use.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/use.ts#L0-L0).

## Overview

```ts
function Use(...args: any[]): Function;
```

## Description

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when
the base of the requested path matches \`path.

```typescript
@Controller('/')
@Use(Middleware1)
export class Ctrl {

   @Get('/')
   @Use(Middleware2)
   get() { }
}

```
