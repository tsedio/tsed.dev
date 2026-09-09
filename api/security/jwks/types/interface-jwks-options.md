---
url: /api/security/jwks/types/interface-jwks-options.md
description: api documentation of JwksOptions from @tsed/jwks
---

## Usage

```typescript
import { JwksOptions } from "@tsed/jwks";
```

> See [/packages/security/jwks/src/getJwks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/jwks/src/getJwks.ts#L0-L0).

## Overview

```ts
interface JwksOptions {
    path: string;
    certificates?: JwksKeyParameters[];
}
```

## path

```ts
path: string;
```

## certificates

```ts
certificates?: JwksKeyParameters[];
```
