---
title: KoaCtx from @tsed/platform-koa
description: api documentation of KoaCtx from @tsed/platform-koa
meta:
 - name: keywords
   description: api typescript node.js documentation KoaCtx decorator
---
# KoaCtx - @tsed/platform-koa

## Usage

```typescript
import { KoaCtx } from "@tsed/platform-koa";
```

> See [/packages/platform/platform-koa/src/decorators/ctx.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-koa/src/decorators/ctx.ts#L0-L0).

## Overview

```ts
function KoaCtx(): ParameterDecorator;

export function Ctx(): ParameterDecorator;
export type Ctx = Context;
export type KoaCtx = Context;
```

<!-- Description -->

## Description

Return the original Koa context.
