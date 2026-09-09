---
title: MemoryAdapter from @tsed/adapters
description: api documentation of MemoryAdapter from @tsed/adapters
meta:
 - name: keywords
   description: api typescript node.js documentation MemoryAdapter class
---
# MemoryAdapter - @tsed/adapters

## Usage

```typescript
import { MemoryAdapter } from "@tsed/adapters";
```

> See [/packages/orm/adapters/src/adapters/MemoryAdapter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/adapters/src/adapters/MemoryAdapter.ts#L0-L0).

## Overview

```ts
class MemoryAdapter<T extends AdapterModel> extends LowDbAdapter<T> {
    constructor(options: any);
    $onInit(): void | Promise<void>;
}
```

<!-- Members -->

## $onInit

```ts
$onInit(): void | Promise<void>;
```
