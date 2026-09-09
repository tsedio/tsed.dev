---
url: /api/specs/exceptions/types/clientErrors/class-precondition-failed.md
description: api documentation of PreconditionFailed from @tsed/exceptions
---

## Usage

```typescript
import { PreconditionFailed } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/PreconditionFailed.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/PreconditionFailed.ts#L0-L0).

## Overview

```ts
class PreconditionFailed extends ClientException {
    static readonly STATUS = 412;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 412;
```
