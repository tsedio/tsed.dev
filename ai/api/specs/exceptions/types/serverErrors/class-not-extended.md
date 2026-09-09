---
title: NotExtended from @tsed/exceptions
description: api documentation of NotExtended from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation NotExtended class
---
# NotExtended - @tsed/exceptions

## Usage

```typescript
import { NotExtended } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/NotExtended.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/NotExtended.ts#L0-L0).

## Overview

```ts
class NotExtended extends ServerException {
    static readonly STATUS = 510;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 510;
```
