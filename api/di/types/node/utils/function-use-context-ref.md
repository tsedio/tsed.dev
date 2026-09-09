---
url: /api/di/types/node/utils/function-use-context-ref.md
description: api documentation of useContextRef from @tsed/di
---

## Usage

```typescript
import { useContextRef } from "@tsed/di";
```

> See [/packages/di/src/node/utils/asyncHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/utils/asyncHookContext.ts#L0-L0).

## Overview

```ts
function useContextRef(): {
    current: DIContext | undefined;
} | undefined;
```

## current

```ts
current: DIContext | undefined;
```
