---
url: /api/core/types/utils/type-deep-merge-comparator-cb.md
description: api documentation of DeepMergeComparatorCB from @tsed/core
---

## Usage

```typescript
import { DeepMergeComparatorCB } from "@tsed/core/src/utils/deepMerge";
```

> See [/packages/core/src/utils/deepMerge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/deepMerge.ts#L0-L0).

## Overview

```ts
type DeepMergeComparatorCB = (item: any, ref: any) => boolean;
```

## Description

Callback type for comparing array items during merge.
