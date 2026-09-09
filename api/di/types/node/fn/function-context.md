---
url: /api/di/types/node/fn/function-context.md
description: api documentation of context from @tsed/di
---

## Usage

```typescript
import { context } from "@tsed/di";
```

> See [/packages/di/src/node/fn/context.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/fn/context.ts#L0-L0).

## Overview

```ts
function context<Ctx = DIContext>(): Ctx;
```

## Description

Get the current DIContext instance using async hook node.js api.

::: warning
This function isn't available in the browser context.
:::
