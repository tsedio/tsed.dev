---
url: /api/specs/exceptions/types/core/class-redirect-exception.md
description: api documentation of RedirectException from @tsed/exceptions
---

## Usage

```typescript
import { RedirectException } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/core/RedirectException.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/core/RedirectException.ts#L0-L0).

## Overview

```ts
class RedirectException extends Exception {
    constructor(status: number, message: string, origin?: Error | string | any);
}
```
