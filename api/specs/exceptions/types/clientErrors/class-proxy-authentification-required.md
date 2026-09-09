---
url: >-
  /api/specs/exceptions/types/clientErrors/class-proxy-authentification-required.md
description: api documentation of ProxyAuthentificationRequired from @tsed/exceptions
---

## Usage

```typescript
import { ProxyAuthentificationRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/ProxyAuthentificationRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/ProxyAuthentificationRequired.ts#L0-L0).

## Overview

```ts
class ProxyAuthentificationRequired extends ClientException {
    static readonly STATUS = 407;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 407;
```
