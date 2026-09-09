---
url: /api/specs/exceptions/types/serverErrors/class-not-implemented.md
description: api documentation of NotImplemented from @tsed/exceptions
---

## Usage

```typescript
import { NotImplemented } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/NotImplemented.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/NotImplemented.ts#L0-L0).

## Overview

```ts
class NotImplemented extends ServerException {
    static readonly STATUS = 501;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 501;
```
