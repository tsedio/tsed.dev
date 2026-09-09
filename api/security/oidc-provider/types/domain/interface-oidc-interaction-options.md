---
url: /api/security/oidc-provider/types/domain/interface-oidc-interaction-options.md
description: api documentation of OidcInteractionOptions from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcInteractionOptions } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/domain/OidcInteractionOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/domain/OidcInteractionOptions.ts#L0-L0).

## Overview

```ts
interface OidcInteractionOptions {
    name: string;
    requestable?: boolean | undefined;
    priority?: number;
    details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>;
    checks?: interactionPolicy.Check[];
}
```

## name

```ts
name: string;
```

## requestable

```ts
requestable?: boolean | undefined;
```

## priority

```ts
priority?: number;
```

## details:

```ts
details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>;
```

## checks

```ts
checks?: interactionPolicy.Check[];
```
