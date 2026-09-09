---
url: /api/security/oidc-provider/types/domain/interface-interaction-methods.md
description: api documentation of InteractionMethods from @tsed/oidc-provider
---

## Usage

```typescript
import { InteractionMethods } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/domain/InteractionMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/domain/InteractionMethods.ts#L0-L0).

## Overview

```ts
interface InteractionMethods {
    details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>;
    checks?: () => interactionPolicy.Check[];
    $onCreate?: (prompt: interactionPolicy.Prompt) => void | Promise<void>;
    $prompt?: (...args: any[]) => any | Promise<any>;
}
```

## details:

```ts
details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>;
```

## checks:

```ts
checks?: () => interactionPolicy.Check[];
```

## $onCreate:

```ts
$onCreate?: (prompt: interactionPolicy.Prompt) => void | Promise<void>;
```

## $prompt:

```ts
$prompt?: (...args: any[]) => any | Promise<any>;
```
