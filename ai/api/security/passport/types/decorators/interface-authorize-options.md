---
title: AuthorizeOptions from @tsed/passport
description: api documentation of AuthorizeOptions from @tsed/passport
meta:
 - name: keywords
   description: api typescript node.js documentation AuthorizeOptions interface
---
# AuthorizeOptions - @tsed/passport

## Usage

```typescript
import { AuthorizeOptions } from "@tsed/passport";
```

> See [/packages/security/passport/src/decorators/authorize.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/passport/src/decorators/authorize.ts#L0-L0).

## Overview

```ts
interface AuthorizeOptions extends AuthenticateOptions {
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
