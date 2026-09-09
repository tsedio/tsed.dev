---
url: /api/platform/platform-middlewares/types/decorators/decorator-middleware.md
description: api documentation of Middleware from @tsed/platform-middlewares
---

## Usage

```typescript
import { Middleware } from "@tsed/platform-middlewares";
```

> See [/packages/platform/platform-middlewares/src/decorators/middleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/decorators/middleware.ts#L0-L0).

## Overview

```ts
function Middleware(opts?: Partial<Omit<ProviderOpts, "type">>): ClassDecorator;
```

## Description

Register a new Middleware class.
