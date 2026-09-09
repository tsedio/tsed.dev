---
url: /api/platform/platform-koa/types/decorators/decorator-ctx.md
description: api documentation of Ctx from @tsed/platform-koa
---

## Usage

```typescript
import { Ctx } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/decorators/ctx.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/decorators/ctx.ts#L0-L0).

## Overview

```ts
function Ctx(): ParameterDecorator;
export type Ctx = Context;
```

## Description

Return the original Koa context.
