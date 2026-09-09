---
title: redirectMiddleware from @tsed/openapi-utils
description: api documentation of redirectMiddleware from @tsed/openapi-utils
meta:
 - name: keywords
   description: api typescript node.js documentation redirectMiddleware function
---
# redirectMiddleware - @tsed/openapi-utils

## Usage

```typescript
import { redirectMiddleware } from "@tsed/openapi-utils";
```

> See [/packages/specs/openapi-utils/src/middlewares/redirectMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/openapi-utils/src/middlewares/redirectMiddleware.ts#L0-L0).

## Overview

```ts
function redirectMiddleware(path: string): () => void;
```

<!-- Description -->

## Description

Redirect to the same path with a trailing slash
