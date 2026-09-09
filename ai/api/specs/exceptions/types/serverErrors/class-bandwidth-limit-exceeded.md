---
title: BandwidthLimitExceeded from @tsed/exceptions
description: api documentation of BandwidthLimitExceeded from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation BandwidthLimitExceeded class
---
# BandwidthLimitExceeded - @tsed/exceptions

## Usage

```typescript
import { BandwidthLimitExceeded } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/BandwidthLimitExceeded.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/BandwidthLimitExceeded.ts#L0-L0).

## Overview

```ts
class BandwidthLimitExceeded extends ServerException {
    static readonly STATUS = 509;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 509;
```
