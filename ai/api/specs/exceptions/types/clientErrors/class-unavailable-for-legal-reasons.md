---
title: UnavailableForLegalReasons from @tsed/exceptions
description: api documentation of UnavailableForLegalReasons from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation UnavailableForLegalReasons class
---
# UnavailableForLegalReasons - @tsed/exceptions

## Usage

```typescript
import { UnavailableForLegalReasons } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/UnavailableForLegalReasons.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/UnavailableForLegalReasons.ts#L0-L0).

## Overview

```ts
class UnavailableForLegalReasons extends ClientException {
    static readonly STATUS = 451;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 451;
```
