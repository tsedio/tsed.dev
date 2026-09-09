---
url: /api/specs/exceptions/types/clientErrors/class-precondition-required.md
description: api documentation of PreconditionRequired from @tsed/exceptions
---

## Usage

```typescript
import { PreconditionRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/PreconditionRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/PreconditionRequired.ts#L0-L0).

## Overview

```ts
class PreconditionRequired extends ClientException {
    static readonly STATUS = 428;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 428;
```
