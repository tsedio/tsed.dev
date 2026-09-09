---
url: /api/orm/adapters/types/adapters/interface-adapter-model.md
description: api documentation of AdapterModel from @tsed/adapters
---

## Usage

```typescript
import { AdapterModel } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/adapters/LowDbAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/adapters/LowDbAdapter.ts#L0-L0).

## Overview

```ts
interface AdapterModel {
    _id: string;
    expires_at?: Date;
    [key: string]: any;
}
```

## \_id

```ts
_id: string;
```

## expires\_at

```ts
expires_at?: Date;
```

## \[key: string]

```ts
[key: string]: any;
```
