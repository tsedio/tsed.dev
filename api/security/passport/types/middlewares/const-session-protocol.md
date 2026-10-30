---
url: /api/security/passport/types/middlewares/const-session-protocol.md
description: api documentation of SESSION_PROTOCOL from @tsed/passport
---

## Usage

```typescript
import { SESSION_PROTOCOL } from "@tsed/passport";
```

> See [/packages/security/passport/src/middlewares/PassportMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.44.13/packages/security/passport/src/middlewares/PassportMiddleware.ts#L0-L0).

## Overview

```ts
const SESSION_PROTOCOL = "session";
```

## Description

Reserved protocol name satisfied by an existing login session. It never runs a Passport strategy.
