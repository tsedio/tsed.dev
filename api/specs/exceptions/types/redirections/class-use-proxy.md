---
url: /api/specs/exceptions/types/redirections/class-use-proxy.md
description: api documentation of UseProxy from @tsed/exceptions
---

## Usage

```typescript
import { UseProxy } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/UseProxy.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/UseProxy.ts#L0-L0).

## Overview

```ts
class UseProxy extends RedirectException {
    static readonly STATUS = 305;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 305;
```
