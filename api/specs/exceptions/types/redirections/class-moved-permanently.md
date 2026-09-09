---
url: /api/specs/exceptions/types/redirections/class-moved-permanently.md
description: api documentation of MovedPermanently from @tsed/exceptions
---

## Usage

```typescript
import { MovedPermanently } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/MovedPermanently.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/MovedPermanently.ts#L0-L0).

## Overview

```ts
class MovedPermanently extends RedirectException {
    static readonly STATUS = 301;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 301;
```
