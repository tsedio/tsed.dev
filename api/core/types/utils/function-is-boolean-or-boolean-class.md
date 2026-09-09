---
url: /api/core/types/utils/function-is-boolean-or-boolean-class.md
description: api documentation of isBooleanOrBooleanClass from @tsed/core
---

## Usage

```typescript
import { isBooleanOrBooleanClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isBoolean.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isBoolean.ts#L0-L0).

## Overview

```ts
function isBooleanOrBooleanClass(target: any): target is boolean;
```

## Description

Checks if a value is a boolean primitive, Boolean object, or the Boolean constructor.
