---
title: OidcPolicy from @tsed/oidc-provider
description: api documentation of OidcPolicy from @tsed/oidc-provider
meta:
 - name: keywords
   description: api typescript node.js documentation OidcPolicy class
---
# OidcPolicy - @tsed/oidc-provider

## Usage

```typescript
import { OidcPolicy } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/services/OidcPolicy.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/services/OidcPolicy.ts#L0-L0).

## Overview

```ts
class OidcPolicy {
    protected injector: import("@tsed/di").InjectorService;
    protected oidcInteractions: OidcInteractions;
    getPolicy(): any;
    createPrompt(instance: InteractionMethods, options: OidcInteractionOptions): Prompt;
}
```

<!-- Members -->

## protected injector: import

```ts
protected injector: import("@tsed/di").InjectorService;
```

## protected oidcInteractions

```ts
protected oidcInteractions: OidcInteractions;
```

## getPolicy

```ts
getPolicy(): any;
```

## createPrompt

```ts
createPrompt(instance: InteractionMethods, options: OidcInteractionOptions): Prompt;
```
