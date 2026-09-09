---
url: >-
  /api/specs/exceptions/types/serverErrors/class-network-authentication-required.md
description: api documentation of NetworkAuthenticationRequired from @tsed/exceptions
---

## Usage

```typescript
import { NetworkAuthenticationRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/NetworkAuthenticationRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/NetworkAuthenticationRequired.ts#L0-L0).

## Overview

```ts
class NetworkAuthenticationRequired extends ServerException {
    static readonly STATUS = 511;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 511;
```
