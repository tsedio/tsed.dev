---
url: /api/graphql/typegraphql/types/middlewares/const-context-middleware.md
description: api documentation of ContextMiddleware from @tsed/typegraphql
---

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

## req

```ts
req: {
     $ctx: DIContext;
 };
```
