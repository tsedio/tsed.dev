---
title: RequestURITooLong from @tsed/exceptions
description: api documentation of RequestURITooLong from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation RequestURITooLong class
---
# RequestURITooLong - @tsed/exceptions

## Usage

```typescript
import { RequestURITooLong } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/RequestURITooLong.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/RequestURITooLong.ts#L0-L0).

## Overview

```ts
class RequestURITooLong extends ClientException {
    static readonly STATUS = 414;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 414;
```
