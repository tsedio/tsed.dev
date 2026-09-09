---
title: PassportMessage from @tsed/passport
description: api documentation of PassportMessage from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation PassportMessage class
---
# PassportMessage - @tsed/passport

## Usage

```typescript
import { PassportMessage } from "@tsed/passport";
```

> See [/packages/security/passport/src/errors/PassportMessage.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/errors/PassportMessage.ts#L0-L0).

## Overview

```ts
class PassportMessage extends Unauthorized {
    opts: Record<string, unknown>;
    constructor(message: string, opts?: Record<string, unknown>);
}
```

<!-- Members -->

## opts

```ts
opts: Record<string, unknown>;
```
