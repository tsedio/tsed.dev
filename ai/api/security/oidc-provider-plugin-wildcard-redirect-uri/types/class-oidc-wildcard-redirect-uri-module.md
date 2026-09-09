---
title: OidcWildcardRedirectUriModule from @tsed/oidc-provider-plugin-wildcard-redirect-uri
description: api documentation of OidcWildcardRedirectUriModule from @tsed/oidc-provider-plugin-wildcard-redirect-uri
meta:
 - name: keywords
   description: api typescript node.js documentation OidcWildcardRedirectUriModule class
---
# OidcWildcardRedirectUriModule - @tsed/oidc-provider-plugin-wildcard-redirect-uri

## Usage

```typescript
import { OidcWildcardRedirectUriModule } from "@tsed/oidc-provider-plugin-wildcard-redirect-uri";
```

> See [/packages/security/oidc-provider-plugin-wildcard-redirect-uri/src/OidcWildcardRedirectUriModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider-plugin-wildcard-redirect-uri/src/OidcWildcardRedirectUriModule.ts#L0-L0).

## Overview

```ts
class OidcWildcardRedirectUriModule {
    readonly enabled: boolean;
    $onCreateOIDC(provider: Provider): void;
    $alterOidcConfiguration(config: OidcSettings): Promise<OidcSettings>;
    validator(ctx: KoaContextWithOIDC, key: string, value: any): void;
}
```

<!-- Members -->

## readonly enabled

```ts
readonly enabled: boolean;
```

## $onCreateOIDC

```ts
$onCreateOIDC(provider: Provider): void;
```

## $alterOidcConfiguration

```ts
$alterOidcConfiguration(config: OidcSettings): Promise<OidcSettings>;
```

## validator

```ts
validator(ctx: KoaContextWithOIDC, key: string, value: any): void;
```
