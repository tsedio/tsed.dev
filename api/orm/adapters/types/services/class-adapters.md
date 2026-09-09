---
url: /api/orm/adapters/types/services/class-adapters.md
description: api documentation of Adapters from @tsed/adapters
---

## Usage

```typescript
import { Adapters } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/services/Adapters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/services/Adapters.ts#L0-L0).

## Overview

```ts
class Adapters {
    invokeAdapter<T = any>(options: AdapterInvokeOptions): Adapter<T>;
}
```

## invokeAdapter

```ts
invokeAdapter<T = any>(options: AdapterInvokeOptions): Adapter<T>;
```
