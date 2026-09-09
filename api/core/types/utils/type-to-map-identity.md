---
url: /api/core/types/utils/type-to-map-identity.md
description: api documentation of ToMapIdentity from @tsed/core
---

## Usage

```typescript
import { ToMapIdentity } from "@tsed/core/src/utils/toMap";
```

> See [/packages/core/src/utils/toMap.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/toMap.ts#L0-L0).

## Overview

```ts
type ToMapIdentity<V> = string | ToMapIdentityCB<V>;
```

## Description

Identity type for map key generation, either a property name or callback function.
