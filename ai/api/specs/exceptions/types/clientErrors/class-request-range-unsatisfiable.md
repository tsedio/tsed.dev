---
title: RequestRangeUnsatisfiable from @tsed/exceptions
description: api documentation of RequestRangeUnsatisfiable from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation RequestRangeUnsatisfiable class
---
# RequestRangeUnsatisfiable - @tsed/exceptions

## Usage

```typescript
import { RequestRangeUnsatisfiable } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/RequestRangeUnsatisfiable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/RequestRangeUnsatisfiable.ts#L0-L0).

## Overview

```ts
class RequestRangeUnsatisfiable extends ClientException {
    static readonly STATUS = 416;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 416;
```
