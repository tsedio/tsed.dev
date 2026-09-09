---
title: ProxyAuthentificationRequired from @tsed/exceptions
description: api documentation of ProxyAuthentificationRequired from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ProxyAuthentificationRequired class
---
# ProxyAuthentificationRequired - @tsed/exceptions

## Usage

```typescript
import { ProxyAuthentificationRequired } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/clientErrors/ProxyAuthentificationRequired.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/clientErrors/ProxyAuthentificationRequired.ts#L0-L0).

## Overview

```ts
class ProxyAuthentificationRequired extends ClientException {
    static readonly STATUS = 407;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 407;
```
