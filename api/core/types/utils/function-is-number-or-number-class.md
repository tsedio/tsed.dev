---
url: /api/core/types/utils/function-is-number-or-number-class.md
description: api documentation of isNumberOrNumberClass from @tsed/core
---

## Usage

```typescript
import { isNumberOrNumberClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isNumber.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isNumber.ts#L0-L0).

## Overview

```ts
function isNumberOrNumberClass(target: any): target is number;
```

## Description

Checks if a value is a number primitive, Number object, or the Number constructor.
