---
url: /api/specs/openapi-utils/types/middlewares/function-js-middleware.md
description: api documentation of jsMiddleware from @tsed/openapi-utils
---

## Usage

```typescript
import { jsMiddleware } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/middlewares/jsMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/middlewares/jsMiddleware.ts#L0-L0).

## Overview

```ts
function jsMiddleware(path: string): () => void;
```

## Description

Expose a js file.
