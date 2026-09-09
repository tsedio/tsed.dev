---
title: PermanentRedirect from @tsed/exceptions
description: api documentation of PermanentRedirect from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation PermanentRedirect class
---
# PermanentRedirect - @tsed/exceptions

## Usage

```typescript
import { PermanentRedirect } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/PermanentRedirect.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/PermanentRedirect.ts#L0-L0).

## Overview

```ts
class PermanentRedirect extends RedirectException {
    static readonly STATUS = 308;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 308;
```
