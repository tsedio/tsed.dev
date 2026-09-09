---
title: openApiMiddleware from @tsed/openapi-utils
description: api documentation of openApiMiddleware from @tsed/openapi-utils
meta:
 - name: keywords
   description: api typescript node.js documentation openApiMiddleware function
---
# openApiMiddleware - @tsed/openapi-utils

## Usage

```typescript
import { openApiMiddleware } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/middlewares/openApiMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/middlewares/openApiMiddleware.ts#L0-L0).

## Overview

```ts
function openApiMiddleware(conf: OpenApiSettings): () => Promise<void>;
```

<!-- Description -->

## Description

Return a middleware to expose the OpenAPI spec.
