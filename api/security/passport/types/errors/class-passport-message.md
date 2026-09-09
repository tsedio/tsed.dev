---
url: /api/security/passport/types/errors/class-passport-message.md
description: api documentation of PassportMessage from @tsed/passport
---

## Usage

```typescript
import { PassportMessage } from "@tsed/passport";
```

> See [/packages/security/passport/src/errors/PassportMessage.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/errors/PassportMessage.ts#L0-L0).

## Overview

```ts
class PassportMessage extends Unauthorized {
    opts: Record<string, unknown>;
    constructor(message: string, opts?: Record<string, unknown>);
}
```

## opts

```ts
opts: Record<string, unknown>;
```
