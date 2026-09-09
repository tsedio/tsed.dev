---
url: /api/specs/exceptions/types/clientErrors/class-conflict.md
description: api documentation of Conflict from @tsed/exceptions
---

## Usage

```typescript
import { Conflict } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/Conflict.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/Conflict.ts#L0-L0).

## Overview

```ts
class Conflict extends ClientException {
    static readonly STATUS = 409;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 409;
```
