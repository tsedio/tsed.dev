---
url: /api/security/jwks/types/interface-jwks-key-parameters.md
description: api documentation of JwksKeyParameters from @tsed/jwks
---

## Usage

```typescript
import { JwksKeyParameters } from "@tsed/jwks";
```

> See [/packages/security/jwks/src/getJwks.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/jwks/src/getJwks.ts#L0-L0).

## Overview

```ts
interface JwksKeyParameters extends KeyParameters {
    path: string;
}
```

## path

```ts
path: string;
```
