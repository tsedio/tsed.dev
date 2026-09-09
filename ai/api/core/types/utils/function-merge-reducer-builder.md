---
title: mergeReducerBuilder from @tsed/core
description: api documentation of mergeReducerBuilder from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation mergeReducerBuilder function
---
# mergeReducerBuilder - @tsed/core

## Usage

```typescript
import { mergeReducerBuilder } from "@tsed/core";
```

> See [/packages/core/src/utils/deepMerge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/deepMerge.ts#L0-L0).

## Overview

```ts
function mergeReducerBuilder(cb: DeepMergeComparatorCB): (collection: any[], value: any, options: DeepMergeOptions) => any[];
```

<!-- Description -->

## Description

Creates a merge reducer using a custom comparator function.
