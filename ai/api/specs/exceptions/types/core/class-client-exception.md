---
title: ClientException from @tsed/exceptions
description: api documentation of ClientException from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ClientException class
---
# ClientException - @tsed/exceptions

## Usage

```typescript
import { ClientException } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/core/ClientException.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/core/ClientException.ts#L0-L0).

## Overview

```ts
class ClientException extends Exception {
    constructor(status: number, message: string, origin?: Error | string | any);
}
```

<!-- Members -->
