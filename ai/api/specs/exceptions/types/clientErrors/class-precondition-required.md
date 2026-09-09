---
title: PreconditionRequired from @tsed/exceptions
description: api documentation of PreconditionRequired from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation PreconditionRequired class
---
# PreconditionRequired - @tsed/exceptions

## Usage

```typescript
import { PreconditionRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/PreconditionRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/PreconditionRequired.ts#L0-L0).

## Overview

```ts
class PreconditionRequired extends ClientException {
    static readonly STATUS = 428;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 428;
```
