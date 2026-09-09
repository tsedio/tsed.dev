---
url: /api/core/types/utils/function-catch-async-error.md
description: api documentation of catchAsyncError from @tsed/core
---

## Usage

```typescript
import { catchAsyncError } from "@tsed/core";
```

> See [/packages/core/src/utils/catchError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/catchError.ts#L0-L0).

## Overview

```ts
function catchAsyncError<T extends Error>(cb: Function): Promise<T | undefined>;
```

## Description

Executes an async callback and returns any thrown error, or undefined if no error occurred.
