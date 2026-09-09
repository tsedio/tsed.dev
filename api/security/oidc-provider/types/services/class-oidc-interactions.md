---
url: /api/security/oidc-provider/types/services/class-oidc-interactions.md
description: api documentation of OidcInteractions from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcInteractions } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/services/OidcInteractions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/services/OidcInteractions.ts#L0-L0).

## Overview

```ts
class OidcInteractions {
    protected env: Env | undefined;
    protected interactions: Map<string, Provider>;
    $onInit(): void;
    getInteractions(): Provider[];
    getInteractionProvider(name: string): Provider | undefined;
    getInteractionHandler(name: string): ((ctx: PlatformContext) => any) | undefined;
}
```

## protected env

```ts
protected env: Env | undefined;
```

## protected interactions

```ts
protected interactions: Map<string, Provider>;
```

## $onInit

```ts
$onInit(): void;
```

## getInteractions

```ts
getInteractions(): Provider[];
```

## getInteractionProvider

```ts
getInteractionProvider(name: string): Provider | undefined;
```

## getInteractionHandler

```ts
getInteractionHandler(name: string): ((ctx: PlatformContext) => any) | undefined;
```
