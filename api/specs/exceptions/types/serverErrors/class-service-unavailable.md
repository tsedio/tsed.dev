---
url: /api/specs/exceptions/types/serverErrors/class-service-unavailable.md
description: api documentation of ServiceUnavailable from @tsed/exceptions
---

## Usage

```typescript
import { ServiceUnavailable } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/ServiceUnavailable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/ServiceUnavailable.ts#L0-L0).

## Overview

```ts
class ServiceUnavailable extends ServerException {
    static readonly STATUS = 503;
    constructor(message: string, origin?: Error | string | any);
}
```

## static readonly STATUS

```ts
static readonly STATUS = 503;
```
