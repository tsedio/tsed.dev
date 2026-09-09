---
url: /api/specs/exceptions/types/clientErrors/class-method-not-allowed.md
description: api documentation of MethodNotAllowed from @tsed/exceptions
---

## Usage

```typescript
import { MethodNotAllowed } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/MethodNotAllowed.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/MethodNotAllowed.ts#L0-L0).

## Overview

```ts
class MethodNotAllowed extends ClientException {
    static readonly STATUS = 405;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 405;
```
