---
title: UnprocessableEntity from @tsed/exceptions
description: api documentation of UnprocessableEntity from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation UnprocessableEntity class
---
# UnprocessableEntity - @tsed/exceptions

## Usage

```typescript
import { UnprocessableEntity } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/UnprocessableEntity.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/UnprocessableEntity.ts#L0-L0).

## Overview

```ts
class UnprocessableEntity extends ClientException {
    static readonly STATUS = 422;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 422;
```
