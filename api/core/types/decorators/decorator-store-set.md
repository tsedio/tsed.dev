---
url: /api/core/types/decorators/decorator-store-set.md
description: api documentation of StoreSet from @tsed/core
---

## Usage

```typescript
import { StoreSet } from "@tsed/core";
```

> See [/packages/core/src/decorators/storeSet.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/decorators/storeSet.ts#L0-L0).

## Overview

```ts
function StoreSet(key: any, value: any): Function;
```

## Description

Creates a decorator that sets a key-value pair in the target's Store metadata.

Uses {@link Store.set} internally to directly set the provided value (no merging).
