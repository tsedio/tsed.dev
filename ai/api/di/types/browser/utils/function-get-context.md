---
title: getContext from @tsed/di
description: api documentation of getContext from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation getContext function
---
# getContext - @tsed/di

## Usage

```typescript
import { getContext } from "@tsed/di";
```

> See [/packages/di/src/browser/utils/asyncHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/browser/utils/asyncHookContext.ts#L0-L0).

## Overview

```ts
function getContext<Context = DIContext>(initialValue?: DIContext): Context | undefined;
```
