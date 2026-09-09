---
title: context from @tsed/di
description: api documentation of context from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation context function
---
# context - @tsed/di

## Usage

```typescript
import { context } from "@tsed/di";
```

> See [/packages/di/src/browser/fn/context.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/browser/fn/context.ts#L0-L0).

## Overview

```ts
function context<Ctx = DIContext>(): Ctx;
```

<!-- Description -->

## Description

Get the current DIContext instance using async hook node.js api.

::: warning
This function isn't available in the browser context.
:::
