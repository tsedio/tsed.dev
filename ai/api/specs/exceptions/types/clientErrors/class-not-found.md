---
title: NotFound from @tsed/exceptions
description: api documentation of NotFound from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation NotFound class
---
# NotFound - @tsed/exceptions

## Usage

```typescript
import { NotFound } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/NotFound.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/NotFound.ts#L0-L0).

## Overview

```ts
class NotFound extends ClientException {
    static readonly STATUS = 404;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 404;
```
