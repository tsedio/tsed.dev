---
title: PaymentRequired from @tsed/exceptions
description: api documentation of PaymentRequired from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation PaymentRequired class
---
# PaymentRequired - @tsed/exceptions

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

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 402;
```
