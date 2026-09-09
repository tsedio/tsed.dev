---
title: UnsupportedMediaType from @tsed/exceptions
description: api documentation of UnsupportedMediaType from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation UnsupportedMediaType class
---
# UnsupportedMediaType - @tsed/exceptions

## Usage

```typescript
import { UnsupportedMediaType } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/UnsupportedMediaType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/UnsupportedMediaType.ts#L0-L0).

## Overview

```ts
class UnsupportedMediaType extends ClientException {
    static readonly STATUS = 415;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 415;
```
