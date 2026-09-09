---
title: BadGateway from @tsed/exceptions
description: api documentation of BadGateway from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation BadGateway class
---
# BadGateway - @tsed/exceptions

## Usage

```typescript
import { BadGateway } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/BadGateway.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/BadGateway.ts#L0-L0).

## Overview

```ts
class BadGateway extends ServerException {
    static readonly STATUS = 502;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 502;
```
