---
url: /api/specs/exceptions/types/clientErrors/class-request-entity-too-large.md
description: api documentation of RequestEntityTooLarge from @tsed/exceptions
---

## Usage

```typescript
import { RequestEntityTooLarge } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/RequestEntityTooLarge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/RequestEntityTooLarge.ts#L0-L0).

## Overview

```ts
class RequestEntityTooLarge extends ClientException {
    static readonly STATUS = 413;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 413;
```
