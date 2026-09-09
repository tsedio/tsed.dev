---
title: LengthRequired from @tsed/exceptions
description: api documentation of LengthRequired from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation LengthRequired class
---
# LengthRequired - @tsed/exceptions

## Usage

```typescript
import { LengthRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/LengthRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/LengthRequired.ts#L0-L0).

## Overview

```ts
class LengthRequired extends ClientException {
    static readonly STATUS = 411;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 411;
```
