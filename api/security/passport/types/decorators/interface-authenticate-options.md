---
url: /api/security/passport/types/decorators/interface-authenticate-options.md
description: api documentation of AuthenticateOptions from @tsed/passport
---

## Usage

```typescript
import { AuthenticateOptions } from "@tsed/passport";
```

> See [/packages/security/passport/src/decorators/authenticate.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/decorators/authenticate.ts#L0-L0).

## Overview

```ts
interface AuthenticateOptions extends PassportAuthenticateOptions {
    security?: Record<string, string[]>;
    originalUrl?: boolean;
}
```

## security

```ts
security?: Record<string, string[]>;
```

## originalUrl

```ts
originalUrl?: boolean;
```
