---
title: UseBeforeEach from @tsed/platform-middlewares
description: api documentation of UseBeforeEach from @tsed/platform-middlewares
meta:
 - name: keywords
   description: api typescript node.js documentation UseBeforeEach decorator
---
# UseBeforeEach - @tsed/platform-middlewares

## Usage

```typescript
import { UseBeforeEach } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/useBeforeEach.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/useBeforeEach.ts#L0-L0).

## Overview

```ts
function UseBeforeEach(...args: any[]): Function;
```

<!-- Description -->

## Description

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when
the base of the requested path matches \`path.

```typescript
@Controller('/')
@UseBeforeEach(Middleware1)  // Called before each endpoint
export class Ctrl {

   @Get('/')
   get() { }
}

```
