---
url: /api/core/types/utils/function-is-array.md
description: api documentation of isArray from @tsed/core
---

## Usage

```typescript
import { isArray } from "@tsed/core";
```

> See [/packages/core/src/utils/isArray.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isArray.ts#L0-L0).

## Overview

```ts
function isArray<T = any>(target: unknown): target is T[];
```

## Description

Checks if a value is an array.
