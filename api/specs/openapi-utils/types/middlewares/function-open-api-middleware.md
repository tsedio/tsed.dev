---
url: /api/specs/openapi-utils/types/middlewares/function-open-api-middleware.md
description: api documentation of openApiMiddleware from @tsed/openapi-utils
---

## Usage

```typescript
import { openApiMiddleware } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/middlewares/openApiMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/middlewares/openApiMiddleware.ts#L0-L0).

## Overview

```ts
function openApiMiddleware(conf: OpenApiSettings): () => Promise<void>;
```

## Description

Return a middleware to expose the OpenAPI spec.
