---
title: AuthenticateOptions from @tsed/passport
description: api documentation of AuthenticateOptions from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation AuthenticateOptions interface
---
# AuthenticateOptions - @tsed/passport

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

<!-- Members -->

## security

```ts
security?: Record<string, string[]>;
```

## originalUrl

```ts
originalUrl?: boolean;
```
