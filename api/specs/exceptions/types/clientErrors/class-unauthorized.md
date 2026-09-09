---
url: /api/specs/exceptions/types/clientErrors/class-unauthorized.md
description: api documentation of Unauthorized from @tsed/exceptions
---

## Usage

```typescript
import { Unauthorized } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/Unauthorized.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/Unauthorized.ts#L0-L0).

## Overview

```ts
class Unauthorized extends ClientException {
    static readonly STATUS = 401;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 401;
```
