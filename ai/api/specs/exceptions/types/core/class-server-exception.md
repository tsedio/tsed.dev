---
title: ServerException from @tsed/exceptions
description: api documentation of ServerException from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ServerException class
---
# ServerException - @tsed/exceptions

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

<!-- Members -->
