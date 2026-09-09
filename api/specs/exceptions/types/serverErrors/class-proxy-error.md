---
url: /api/specs/exceptions/types/serverErrors/class-proxy-error.md
description: api documentation of ProxyError from @tsed/exceptions
---

## Usage

```typescript
import { ProxyError } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/ProxyError.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/ProxyError.ts#L0-L0).

## Overview

```ts
class ProxyError extends ServerException {
    static readonly STATUS = 502;
    name: string;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 502;
```

## name

```ts
name: string;
```
