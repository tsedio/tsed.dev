---
url: /api/core/types/utils/function-is-array-or-array-class.md
description: api documentation of isArrayOrArrayClass from @tsed/core
---

## Usage

```typescript
import { isArrayOrArrayClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isArray.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isArray.ts#L0-L0).

## Overview

```ts
function isArrayOrArrayClass<T = any>(target: unknown): target is T[];
```

## Description

Checks if a value is the Array constructor or an array instance.
