---
url: /api/specs/exceptions/types/clientErrors/class-not-acceptable.md
description: api documentation of NotAcceptable from @tsed/exceptions
---

## Usage

```typescript
import { NotAcceptable } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/NotAcceptable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/NotAcceptable.ts#L0-L0).

## Overview

```ts
class NotAcceptable extends ClientException {
    static readonly STATUS = 406;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 406;
```
