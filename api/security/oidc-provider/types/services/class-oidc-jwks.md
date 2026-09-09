---
url: /api/security/oidc-provider/types/services/class-oidc-jwks.md
description: api documentation of OidcJwks from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcJwks } from "@tsed/oidc-provider";
```

> See [/packages/security/oidc-provider/src/services/OidcJwks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/services/OidcJwks.ts#L0-L0).

## Overview

```ts
class OidcJwks {
    jwksPath: string;
    certificates?: JwksKeyParameters[];
    keys: string;
    $onInit(): any;
    getJwks(): any;
}
```

## jwksPath

```ts
jwksPath: string;
```

## certificates

```ts
certificates?: JwksKeyParameters[];
```

## keys

```ts
keys: string;
```

## $onInit

```ts
$onInit(): any;
```

## getJwks

```ts
getJwks(): any;
```
