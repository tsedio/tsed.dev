---
title: SeeOther from @tsed/exceptions
description: api documentation of SeeOther from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation SeeOther class
---
# SeeOther - @tsed/exceptions

## Usage

```typescript
import { SeeOther } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/SeeOther.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/SeeOther.ts#L0-L0).

## Overview

```ts
class SeeOther extends RedirectException {
    static readonly STATUS = 303;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 303;
```
