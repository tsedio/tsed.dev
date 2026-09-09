---
title: GatewayTimeout from @tsed/exceptions
description: api documentation of GatewayTimeout from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation GatewayTimeout class
---
# GatewayTimeout - @tsed/exceptions

## Usage

```typescript
import { GatewayTimeout } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/GatewayTimeout.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/GatewayTimeout.ts#L0-L0).

## Overview

```ts
class GatewayTimeout extends ServerException {
    static readonly STATUS = 504;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 504;
```
