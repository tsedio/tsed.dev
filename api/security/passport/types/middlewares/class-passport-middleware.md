---
url: /api/security/passport/types/middlewares/class-passport-middleware.md
description: api documentation of PassportMiddleware from @tsed/passport
---

## Usage

```typescript
import { PassportMiddleware } from "@tsed/passport";
```

> See [/packages/security/passport/src/middlewares/PassportMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.44.13/packages/security/passport/src/middlewares/PassportMiddleware.ts#L0-L0).

## Overview

```ts
class PassportMiddleware {
    protocolsService: ProtocolsService;
    shouldSkip(protocol: string | string[], protocols: string[], ctx: Context): boolean;
    use(ctx: Context): Promise<void>;
}
```

## protocolsService

```ts
protocolsService: ProtocolsService;
```

## shouldSkip

```ts
shouldSkip(protocol: string | string[], protocols: string[], ctx: Context): boolean;
```

Return true when an existing login session satisfies the protocols declared on the endpoint:

* the endpoint accepts any protocol (`"*"`),
* the endpoint accepts the reserved `"session"` protocol and the request carries a persisted login session,
* or the persisted login session was established by one of the endpoint protocols.

A session established by another protocol never satisfies the endpoint: its strategies run instead.

## use

```ts
use(ctx: Context): Promise<void>;
```
