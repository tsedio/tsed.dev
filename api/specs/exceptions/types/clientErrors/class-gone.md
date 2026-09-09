---
url: /api/specs/exceptions/types/clientErrors/class-gone.md
description: api documentation of Gone from @tsed/exceptions
---

## Usage

```typescript
import { Gone } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/Gone.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/Gone.ts#L0-L0).

## Overview

```ts
class Gone extends ClientException {
    static readonly STATUS = 410;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 410;
```
