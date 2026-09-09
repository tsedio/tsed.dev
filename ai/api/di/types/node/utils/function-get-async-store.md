---
title: getAsyncStore from @tsed/di
description: api documentation of getAsyncStore from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation getAsyncStore function
---
# getAsyncStore - @tsed/di

## Usage

```typescript
import { getAsyncStore } from "@tsed/di";
```

> See [/packages/di/src/node/utils/asyncHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/utils/asyncHookContext.ts#L0-L0).

## Overview

```ts
function getAsyncStore(): AsyncLocalStorage<{
    current: DIContext | undefined;
}>;
```

<!-- Members -->

## current

```ts
current: DIContext | undefined;
```
