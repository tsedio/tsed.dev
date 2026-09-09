---
title: MisdirectedRequest from @tsed/exceptions
description: api documentation of MisdirectedRequest from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation MisdirectedRequest class
---
# MisdirectedRequest - @tsed/exceptions

## Usage

```typescript
import { MisdirectedRequest } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/MisdirectedRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/MisdirectedRequest.ts#L0-L0).

## Overview

```ts
class MisdirectedRequest extends ClientException {
    static readonly STATUS = 421;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 421;
```
