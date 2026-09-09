---
title: MovedTemporarily from @tsed/exceptions
description: api documentation of MovedTemporarily from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation MovedTemporarily class
---
# MovedTemporarily - @tsed/exceptions

## Usage

```typescript
import { MovedTemporarily } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/MovedTemporarily.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/MovedTemporarily.ts#L0-L0).

## Overview

```ts
class MovedTemporarily extends RedirectException {
    static readonly STATUS = 302;
    name: string;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 302;
```

## name

```ts
name: string;
```
