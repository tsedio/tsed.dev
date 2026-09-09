---
url: >-
  /api/specs/exceptions/types/clientErrors/class-request-header-fields-too-large.md
description: api documentation of RequestHeaderFieldsTooLarge from @tsed/exceptions
---

## Usage

```typescript
import { RequestHeaderFieldsTooLarge } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/RequestHeaderFieldsTooLarge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/RequestHeaderFieldsTooLarge.ts#L0-L0).

## Overview

```ts
class RequestHeaderFieldsTooLarge extends ClientException {
    static readonly STATUS = 431;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 431;
```
