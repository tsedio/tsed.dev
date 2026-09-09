---
title: Unauthorized from @tsed/exceptions
description: api documentation of Unauthorized from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation Unauthorized class
---
# Unauthorized - @tsed/exceptions

## Usage

```typescript
import { Unauthorized } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/Unauthorized.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/Unauthorized.ts#L0-L0).

## Overview

```ts
class Unauthorized extends ClientException {
    static readonly STATUS = 401;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 401;
```
