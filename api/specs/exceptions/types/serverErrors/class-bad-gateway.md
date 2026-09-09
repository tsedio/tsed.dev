---
url: /api/specs/exceptions/types/serverErrors/class-bad-gateway.md
description: api documentation of BadGateway from @tsed/exceptions
---

## Usage

```typescript
import { BadGateway } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/BadGateway.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/BadGateway.ts#L0-L0).

## Overview

```ts
class BadGateway extends ServerException {
    static readonly STATUS = 502;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 502;
```
