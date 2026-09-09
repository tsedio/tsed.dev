---
url: /api/specs/exceptions/types/redirections/class-temporary-redirect.md
description: api documentation of TemporaryRedirect from @tsed/exceptions
---

## Usage

```typescript
import { TemporaryRedirect } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/TemporaryRedirect.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/TemporaryRedirect.ts#L0-L0).

## Overview

```ts
class TemporaryRedirect extends RedirectException {
    static readonly STATUS = 307;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 307;
```
