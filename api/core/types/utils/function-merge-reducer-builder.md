---
url: /api/core/types/utils/function-merge-reducer-builder.md
description: api documentation of mergeReducerBuilder from @tsed/core
---

## Usage

```typescript
import { mergeReducerBuilder } from "@tsed/core";
```

> See [/packages/core/src/utils/deepMerge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/deepMerge.ts#L0-L0).

## Overview

```ts
function mergeReducerBuilder(cb: DeepMergeComparatorCB): (collection: any[], value: any, options: DeepMergeOptions) => any[];
```

## Description

Creates a merge reducer using a custom comparator function.
