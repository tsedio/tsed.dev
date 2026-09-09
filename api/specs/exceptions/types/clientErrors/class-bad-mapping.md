---
url: /api/specs/exceptions/types/clientErrors/class-bad-mapping.md
description: api documentation of BadMapping from @tsed/exceptions
---

## Usage

```typescript
import { BadMapping } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/BadMapping.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/BadMapping.ts#L0-L0).

## Overview

```ts
class BadMapping extends ClientException {
    static readonly STATUS = 421;
    name: string;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 421;
```

## name

```ts
name: string;
```
