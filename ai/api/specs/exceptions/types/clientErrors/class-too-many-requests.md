---
title: TooManyRequests from @tsed/exceptions
description: api documentation of TooManyRequests from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation TooManyRequests class
---
# TooManyRequests - @tsed/exceptions

## Usage

```typescript
import { TooManyRequests } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/TooManyRequests.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/TooManyRequests.ts#L0-L0).

## Overview

```ts
class TooManyRequests extends ClientException {
    static readonly STATUS = 429;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 429;
```
