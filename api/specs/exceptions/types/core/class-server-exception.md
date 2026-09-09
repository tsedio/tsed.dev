---
url: /api/specs/exceptions/types/core/class-server-exception.md
description: api documentation of ServerException from @tsed/exceptions
---

## Usage

```typescript
import { ServerException } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/core/ServerException.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/core/ServerException.ts#L0-L0).

## Overview

```ts
class ServerException extends Exception {
    constructor(status: number, message: string, origin?: Error | string | any);
}
```
