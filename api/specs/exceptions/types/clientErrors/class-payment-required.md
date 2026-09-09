---
url: /api/specs/exceptions/types/clientErrors/class-payment-required.md
description: api documentation of PaymentRequired from @tsed/exceptions
---

## Usage

```typescript
import { PaymentRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/PaymentRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/PaymentRequired.ts#L0-L0).

## Overview

```ts
class PaymentRequired extends ClientException {
    static readonly STATUS = 402;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 402;
```
