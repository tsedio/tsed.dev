---
url: /api/security/oidc-provider/types/services/type-oidc-adapter-methods.md
description: api documentation of OidcAdapterMethods from @tsed/oidc-provider
---

## Usage

```typescript
import { OidcAdapterMethods } from "@tsed/security/oidc-provider/src/services/OidcAdapters";
```

> See [/packages/security/oidc-provider/src/services/OidcAdapters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/security/oidc-provider/src/services/OidcAdapters.ts#L0-L0).

## Overview

```ts
type OidcAdapterMethods<Model = any> = Adapter<Model> & Partial<Omit<OidcAdapter, "upsert">>;
```
