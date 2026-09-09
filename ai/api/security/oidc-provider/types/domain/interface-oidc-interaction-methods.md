---
title: OidcInteractionMethods from @tsed/oidc-provider
description: api documentation of OidcInteractionMethods from @tsed/oidc-provider
meta:
 - name: keywords
   description: api typescript node.js documentation OidcInteractionMethods interface
---
# OidcInteractionMethods - @tsed/oidc-provider

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

<!-- Members -->

## $prompts

```ts
$prompts?(...args: unknown[]): void | unknown | Promise<unknown>;
```
