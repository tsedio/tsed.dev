---
title: deepMerge from @tsed/core
description: api documentation of deepMerge from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation deepMerge function
---
# deepMerge - @tsed/core

## Usage

```typescript
import { deepMerge } from "@tsed/core";
```

> See [/packages/core/src/utils/deepMerge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/deepMerge.ts#L0-L0).

## Overview

```ts
function deepMerge<T = any, C = any>(source: T & any, obj: C & any, options?: DeepMergeOptions): (T & C) | undefined | null;
```

<!-- Description -->

## Description

Deeply merges two values, combining objects recursively and handling arrays with custom reducers.

Supports primitives, arrays, and objects. Can clean undefined properties and apply custom transformations.
