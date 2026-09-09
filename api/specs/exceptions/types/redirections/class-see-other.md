---
url: /api/specs/exceptions/types/redirections/class-see-other.md
description: api documentation of SeeOther from @tsed/exceptions
---

## Usage

```typescript
import { SeeOther } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/SeeOther.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/SeeOther.ts#L0-L0).

## Overview

```ts
class SeeOther extends RedirectException {
    static readonly STATUS = 303;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 303;
```
