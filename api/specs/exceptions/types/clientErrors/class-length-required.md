---
url: /api/specs/exceptions/types/clientErrors/class-length-required.md
description: api documentation of LengthRequired from @tsed/exceptions
---

## Usage

```typescript
import { LengthRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/LengthRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/LengthRequired.ts#L0-L0).

## Overview

```ts
class LengthRequired extends ClientException {
    static readonly STATUS = 411;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 411;
```
