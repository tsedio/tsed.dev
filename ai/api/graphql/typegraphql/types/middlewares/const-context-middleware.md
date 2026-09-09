---
title: ContextMiddleware from @tsed/typegraphql
description: api documentation of ContextMiddleware from @tsed/typegraphql
meta:
 - name: keywords
   description: api typescript node.js documentation ContextMiddleware const
---
# ContextMiddleware - @tsed/typegraphql

## Usage

```typescript
import { ContextMiddleware } from "@tsed/typegraphql";
```

> See [/packages/graphql/typegraphql/src/middlewares/ContextMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/graphql/typegraphql/src/middlewares/ContextMiddleware.ts#L0-L0).

## Overview

```ts
const ContextMiddleware: MiddlewareFn<{
    req: {
        $ctx: DIContext;
    };
}>;
```

<!-- Members -->

## req

```ts
req: {
     $ctx: DIContext;
 };
```
