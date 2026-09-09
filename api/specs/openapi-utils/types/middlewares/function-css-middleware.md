---
url: /api/specs/openapi-utils/types/middlewares/function-css-middleware.md
description: api documentation of cssMiddleware from @tsed/openapi-utils
---

## Usage

```typescript
import { cssMiddleware } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/middlewares/cssMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/middlewares/cssMiddleware.ts#L0-L0).

## Overview

```ts
function cssMiddleware(path: string): () => void;
```

## Description

Expose a css file.
