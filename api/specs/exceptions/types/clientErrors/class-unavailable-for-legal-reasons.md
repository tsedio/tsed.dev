---
url: >-
  /api/specs/exceptions/types/clientErrors/class-unavailable-for-legal-reasons.md
description: api documentation of UnavailableForLegalReasons from @tsed/exceptions
---

## Usage

```typescript
import { UnavailableForLegalReasons } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/UnavailableForLegalReasons.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/UnavailableForLegalReasons.ts#L0-L0).

## Overview

```ts
class UnavailableForLegalReasons extends ClientException {
    static readonly STATUS = 451;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 451;
```
