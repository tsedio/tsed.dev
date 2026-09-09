---
url: /api/specs/exceptions/types/clientErrors/class-im-a-teapot.md
description: api documentation of ImATeapot from @tsed/exceptions
---

## Usage

```typescript
import { ImATeapot } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/ImATeapot.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/ImATeapot.ts#L0-L0).

## Overview

```ts
class ImATeapot extends ClientException {
    static readonly STATUS = 418;
    name: string;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 418;
```

## name

```ts
name: string;
```
