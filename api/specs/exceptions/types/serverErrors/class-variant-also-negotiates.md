---
url: /api/specs/exceptions/types/serverErrors/class-variant-also-negotiates.md
description: api documentation of VariantAlsoNegotiates from @tsed/exceptions
---

## Usage

```typescript
import { VariantAlsoNegotiates } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/VariantAlsoNegotiates.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/VariantAlsoNegotiates.ts#L0-L0).

## Overview

```ts
class VariantAlsoNegotiates extends ServerException {
    static readonly STATUS = 506;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 506;
```
