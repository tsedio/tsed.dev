---
url: /api/specs/exceptions/types/clientErrors/class-bad-request.md
description: api documentation of BadRequest from @tsed/exceptions
---

## Usage

```typescript
import { BadRequest } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/BadRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/BadRequest.ts#L0-L0).

## Overview

```ts
class BadRequest extends ClientException {
    static readonly STATUS = 400;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 400;
```
