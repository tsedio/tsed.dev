---
url: /api/specs/exceptions/types/clientErrors/class-request-timeout.md
description: api documentation of RequestTimeout from @tsed/exceptions
---

## Usage

```typescript
import { RequestTimeout } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/RequestTimeout.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/RequestTimeout.ts#L0-L0).

## Overview

```ts
class RequestTimeout extends ClientException {
    static readonly STATUS = 408;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 408;
```
