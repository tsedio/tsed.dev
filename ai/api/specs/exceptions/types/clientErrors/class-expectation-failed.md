---
title: ExpectationFailed from @tsed/exceptions
description: api documentation of ExpectationFailed from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ExpectationFailed class
---
# ExpectationFailed - @tsed/exceptions

## Usage

```typescript
import { ExpectationFailed } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/ExpectationFailed.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/ExpectationFailed.ts#L0-L0).

## Overview

```ts
class ExpectationFailed extends ClientException {
    static readonly STATUS = 417;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 417;
```
