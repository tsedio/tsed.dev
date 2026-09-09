---
title: BadMapping from @tsed/exceptions
description: api documentation of BadMapping from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation BadMapping class
---
# BadMapping - @tsed/exceptions

## Usage

```typescript
import { BadMapping } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/BadMapping.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/BadMapping.ts#L0-L0).

## Overview

```ts
class BadMapping extends ClientException {
    static readonly STATUS = 421;
    name: string;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 421;
```

## name

```ts
name: string;
```
