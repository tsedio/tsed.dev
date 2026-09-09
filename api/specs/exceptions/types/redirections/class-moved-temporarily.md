---
url: /api/specs/exceptions/types/redirections/class-moved-temporarily.md
description: api documentation of MovedTemporarily from @tsed/exceptions
---

## Usage

```typescript
import { MovedTemporarily } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/MovedTemporarily.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/MovedTemporarily.ts#L0-L0).

## Overview

```ts
class MovedTemporarily extends RedirectException {
    static readonly STATUS = 302;
    name: string;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 302;
```

## name

```ts
name: string;
```
