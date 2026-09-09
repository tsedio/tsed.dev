---
url: /api/security/oidc-provider/types/domain/interface-oidc-interaction-methods.md
description: api documentation of OidcInteractionMethods from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcInteractionMethods } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/domain/OidcInteractionMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/domain/OidcInteractionMethods.ts#L0-L0).

## Overview

```ts
interface OidcInteractionMethods {
    $prompts?(...args: unknown[]): void | unknown | Promise<unknown>;
}
```

## $prompts

```ts
$prompts?(...args: unknown[]): void | unknown | Promise<unknown>;
```
