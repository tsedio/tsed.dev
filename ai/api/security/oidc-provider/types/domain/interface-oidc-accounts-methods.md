---
title: OidcAccountsMethods from @tsed/oidc-provider
description: api documentation of OidcAccountsMethods from @tsed/oidc-provider
meta:
 - name: keywords
   description: api typescript node.js documentation OidcAccountsMethods interface
---
# OidcAccountsMethods - @tsed/oidc-provider

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

<!-- Members -->

## findAccount

```ts
findAccount(id: string, token: AuthorizationCode | AccessToken | DeviceCode | BackchannelAuthenticationRequest | undefined): Promise<Account | undefined>;
```
