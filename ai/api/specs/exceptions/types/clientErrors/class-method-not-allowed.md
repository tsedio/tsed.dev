---
title: MethodNotAllowed from @tsed/exceptions
description: api documentation of MethodNotAllowed from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation MethodNotAllowed class
---
# MethodNotAllowed - @tsed/exceptions

## Usage

```typescript
import { MethodNotAllowed } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/MethodNotAllowed.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/MethodNotAllowed.ts#L0-L0).

## Overview

```ts
class MethodNotAllowed extends ClientException {
    static readonly STATUS = 405;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 405;
```
