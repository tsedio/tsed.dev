---
url: /api/security/oidc-provider/types/domain/interface-oidc-accounts-methods.md
description: api documentation of OidcAccountsMethods from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcAccountsMethods } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/domain/OidcAccountsMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/domain/OidcAccountsMethods.ts#L0-L0).

## Overview

```ts
interface OidcAccountsMethods {
    findAccount(id: string, token: AuthorizationCode | AccessToken | DeviceCode | BackchannelAuthenticationRequest | undefined): Promise<Account | undefined>;
}
```

## findAccount

```ts
findAccount(id: string, token: AuthorizationCode | AccessToken | DeviceCode | BackchannelAuthenticationRequest | undefined): Promise<Account | undefined>;
```
