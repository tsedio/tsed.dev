---
url: /api/security/oidc-provider/types/domain/interface-oidc-settings.md
description: api documentation of OidcSettings from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcSettings } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/domain/OidcSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/domain/OidcSettings.ts#L0-L0).

## Overview

```ts
interface OidcSettings extends Configuration {
    secureCookies?: boolean;
    path?: string;
    issuer?: string;
    jwksPath?: string;
    certificates?: JwksKeyParameters[];
    secureKey?: string[];
    proxy?: boolean;
    allowHttpLocalhost?: boolean;
    Accounts?: Type<OidcAccountsMethods>;
    Adapter?: Type<Adapter>;
    connectionName?: string;
    plugins?: TsED.OIDCPluginSettings;
    render?: {
        omitClientProps?: string[];
    };
}
```

## secureCookies

```ts
secureCookies?: boolean;
```

force the secure cookie. By default, in dev mode it's disabled and in production it's enabled.

## path

```ts
path?: string;
```

Path on which the oidc-provider instance is mounted.

## issuer

```ts
issuer?: string;
```

Issuer URI. By default, Ts.ED create issuer with http://localhost:${httpPort}

## jwksPath

```ts
jwksPath?: string;
```

Path to store jwks keys.

## certificates

```ts
certificates?: JwksKeyParameters[];
```

Generate jwks from given certificates

## secureKey

```ts
secureKey?: string[];
```

Secure keys.

## proxy

```ts
proxy?: boolean;
```

Enable proxy.

## allowHttpLocalhost

```ts
allowHttpLocalhost?: boolean;
```

Allow redirect\_uri on HTTP protocol and localhost domain.

## Accounts

```ts
Accounts?: Type<OidcAccountsMethods>;
```

Injectable service to manage accounts.

## Adapter

```ts
Adapter?: Type<Adapter>;
```

Injectable adapter to manage database connexion.

## connectionName

```ts
connectionName?: string;
```

Use the connection name for the OIDCRedisAdapter.

## plugins

```ts
plugins?: TsED.OIDCPluginSettings;
```

## render

```ts
render?: {
     omitClientProps?: string[];
 };
```
