---
url: /api/specs/exceptions/types/clientErrors/class-upgrade-required.md
description: api documentation of UpgradeRequired from @tsed/exceptions
---

## Usage

```typescript
import { UpgradeRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/UpgradeRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/UpgradeRequired.ts#L0-L0).

## Overview

```ts
class UpgradeRequired extends ClientException {
    static readonly STATUS = 426;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 426;
```
