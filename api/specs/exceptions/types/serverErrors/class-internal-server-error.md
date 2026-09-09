---
url: /api/specs/exceptions/types/serverErrors/class-internal-server-error.md
description: api documentation of InternalServerError from @tsed/exceptions
---

## Usage

```typescript
import { InternalServerError } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/InternalServerError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/InternalServerError.ts#L0-L0).

## Overview

```ts
class InternalServerError extends ServerException {
    static readonly STATUS = 500;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 500;
```
