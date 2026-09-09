---
url: /api/core/types/utils/function-deep-clone.md
description: api documentation of deepClone from @tsed/core
---

## Usage

```typescript
import { deepClone } from "@tsed/core";
```

> See [/packages/core/src/utils/deepClone.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/deepClone.ts#L0-L0).

## Overview

```ts
const deepClone: (source: any, stack?: WeakMap<WeakKey, any>) => any;
```

## Description

Creates a deep clone of the provided value, preserving prototype chains and handling circular references.

Supports primitives, dates, regular expressions, typed arrays, buffers, maps, sets, and plain objects.
Uses a WeakMap to track and handle circular references correctly.
