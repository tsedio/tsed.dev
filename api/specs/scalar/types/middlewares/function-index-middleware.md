---
url: /api/specs/scalar/types/middlewares/function-index-middleware.md
description: api documentation of indexMiddleware from @tsed/scalar
---

## Usage

```typescript
import { indexMiddleware } from "@tsed/scalar";
```

> See [/packages/specs/scalar/src/middlewares/indexMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/scalar/src/middlewares/indexMiddleware.ts#L0-L0).

## Overview

```ts
function indexMiddleware(viewPath: string, conf: ScalarSettings): () => Promise<void>;
```
