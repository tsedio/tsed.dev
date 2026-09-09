---
title: MultipleChoices from @tsed/exceptions
description: api documentation of MultipleChoices from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation MultipleChoices class
---
# MultipleChoices - @tsed/exceptions

## Usage

```typescript
import { MultipleChoices } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/redirections/MultipleChoices.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/redirections/MultipleChoices.ts#L0-L0).

## Overview

```ts
class MultipleChoices extends RedirectException {
    static readonly STATUS = 300;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 300;
```
