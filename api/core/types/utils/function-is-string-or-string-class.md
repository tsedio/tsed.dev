---
url: /api/core/types/utils/function-is-string-or-string-class.md
description: api documentation of isStringOrStringClass from @tsed/core
---

## Usage

```typescript
import { isStringOrStringClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isString.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isString.ts#L0-L0).

## Overview

```ts
function isStringOrStringClass(target: any): target is string;
```

## Description

Checks if a value is a string primitive, String object, or the String constructor.
