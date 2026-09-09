---
url: /api/di/types/node/utils/function-get-async-store.md
description: api documentation of getAsyncStore from @tsed/di
---

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

## current

```ts
current: DIContext | undefined;
```
