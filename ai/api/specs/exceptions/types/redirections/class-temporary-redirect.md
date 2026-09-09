---
title: TemporaryRedirect from @tsed/exceptions
description: api documentation of TemporaryRedirect from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation TemporaryRedirect class
---
# TemporaryRedirect - @tsed/exceptions

## Usage

```typescript
import { TemporaryRedirect } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/TemporaryRedirect.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/TemporaryRedirect.ts#L0-L0).

## Overview

```ts
class TemporaryRedirect extends RedirectException {
    static readonly STATUS = 307;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 307;
```
