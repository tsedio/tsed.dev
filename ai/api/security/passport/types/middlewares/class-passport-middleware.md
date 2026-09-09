---
title: PassportMiddleware from @tsed/passport
description: api documentation of PassportMiddleware from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation PassportMiddleware class
---
# PassportMiddleware - @tsed/passport

## Usage

```typescript
import { PassportMiddleware } from "@tsed/passport";
```

> See [/packages/security/passport/src/middlewares/PassportMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/middlewares/PassportMiddleware.ts#L0-L0).

## Overview

```ts
class PassportMiddleware {
    protocolsService: ProtocolsService;
    shouldSkip(ctx: Context): any;
    use(ctx: Context): Promise<void>;
}
```

<!-- Members -->

## protocolsService

```ts
protocolsService: ProtocolsService;
```

## shouldSkip

```ts
shouldSkip(ctx: Context): any;
```

## use

```ts
use(ctx: Context): Promise<void>;
```
