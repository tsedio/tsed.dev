---
url: /api/orm/adapters/types/adapters/class-file-sync-adapter.md
description: api documentation of FileSyncAdapter from @tsed/adapters
---

## Usage

```typescript
import { FileSyncAdapter } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/adapters/FileSyncAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/adapters/FileSyncAdapter.ts#L0-L0).

## Overview

```ts
class FileSyncAdapter<T extends AdapterModel> extends LowDbAdapter<T> {
    constructor(options: FileSyncAdapterConstructorOptions);
}
```
