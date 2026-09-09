---
url: /api/core/types/utils/function-catch-error.md
description: api documentation of catchError from @tsed/core
---

## Usage

```typescript
import { catchError } from "@tsed/core";
```

> See [/packages/core/src/utils/catchError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/catchError.ts#L0-L0).

## Overview

```ts
function catchError<T extends Error>(cb: Function): T | undefined;
```

## Description

Executes a callback and returns any thrown error, or undefined if no error occurred.
