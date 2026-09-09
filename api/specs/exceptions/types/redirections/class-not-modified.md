---
url: /api/specs/exceptions/types/redirections/class-not-modified.md
description: api documentation of NotModified from @tsed/exceptions
---

## Usage

```typescript
import { NotModified } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/NotModified.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/NotModified.ts#L0-L0).

## Overview

```ts
class NotModified extends RedirectException {
    static readonly STATUS = 304;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 304;
```
