---
url: >-
  /api/security/oidc-provider/types/middlewares/class-oidc-interaction-middleware.md
description: api documentation of OidcInteractionMiddleware from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcInteractionMiddleware } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/middlewares/OidcInteractionMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/middlewares/OidcInteractionMiddleware.ts#L0-L0).

## Overview

```ts
class OidcInteractionMiddleware {
    protected oidcInteractionContext: OidcInteractionContext;
    use(): Promise<void>;
}
```

## protected oidcInteractionContext

```ts
protected oidcInteractionContext: OidcInteractionContext;
```

## use

```ts
use(): Promise<void>;
```
