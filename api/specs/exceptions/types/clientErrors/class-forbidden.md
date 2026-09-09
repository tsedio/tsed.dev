---
url: /api/specs/exceptions/types/clientErrors/class-forbidden.md
description: api documentation of Forbidden from @tsed/exceptions
---

## Usage

```typescript
import { Forbidden } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/Forbidden.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/Forbidden.ts#L0-L0).

## Overview

```ts
class Forbidden extends ClientException {
    static readonly STATUS = 403;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 403;
```
