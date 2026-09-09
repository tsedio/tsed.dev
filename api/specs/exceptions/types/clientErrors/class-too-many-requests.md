---
url: /api/specs/exceptions/types/clientErrors/class-too-many-requests.md
description: api documentation of TooManyRequests from @tsed/exceptions
---

## Usage

```typescript
import { TooManyRequests } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/TooManyRequests.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/TooManyRequests.ts#L0-L0).

## Overview

```ts
class TooManyRequests extends ClientException {
    static readonly STATUS = 429;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 429;
```
