---
url: /api/orm/adapters/types/adapters/interface-low-model.md
description: api documentation of LowModel from @tsed/adapters
---

## Usage

```typescript
import { LowModel } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/adapters/LowDbAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/adapters/LowDbAdapter.ts#L0-L0).

## Overview

```ts
interface LowModel<T> {
    collection: T[];
    collectionName?: string;
    modelName?: string;
}
```

## collection

```ts
collection: T[];
```

## collectionName

```ts
collectionName?: string;
```

## modelName

```ts
modelName?: string;
```
