---
url: /api/di/types/node/utils/function-get-context.md
description: api documentation of getContext from @tsed/di
---

## Usage

```typescript
import { getContext } from "@tsed/di";
```

> See [/packages/di/src/node/utils/asyncHookContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/node/utils/asyncHookContext.ts#L0-L0).

## Overview

```ts
function getContext<Context = DIContext>(initialValue?: DIContext): Context | undefined;
```
