---
title: NotAcceptable from @tsed/exceptions
description: api documentation of NotAcceptable from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation NotAcceptable class
---
# NotAcceptable - @tsed/exceptions

## Usage

```typescript
import { NotAcceptable } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/NotAcceptable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/NotAcceptable.ts#L0-L0).

## Overview

```ts
class NotAcceptable extends ClientException {
    static readonly STATUS = 406;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 406;
```
