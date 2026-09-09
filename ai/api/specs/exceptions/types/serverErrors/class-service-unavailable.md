---
title: ServiceUnavailable from @tsed/exceptions
description: api documentation of ServiceUnavailable from @tsed/exceptions
meta:
 - name: keywords
   description: api typescript node.js documentation ServiceUnavailable class
---
# ServiceUnavailable - @tsed/exceptions

## Usage

```typescript
import { ServiceUnavailable } from "@tsed/exceptions";
```

> See [/packages/specs/exceptions/src/serverErrors/ServiceUnavailable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/exceptions/src/serverErrors/ServiceUnavailable.ts#L0-L0).

## Overview

```ts
class ServiceUnavailable extends ServerException {
    static readonly STATUS = 503;
    constructor(message: string, origin?: Error | string | any);
}
```

<!-- Members -->

## static readonly STATUS

```ts
static readonly STATUS = 503;
```
