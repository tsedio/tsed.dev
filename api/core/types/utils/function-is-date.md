---
url: /api/core/types/utils/function-is-date.md
description: api documentation of isDate from @tsed/core
---

## Usage

```typescript
import { isDate } from "@tsed/core";
```

> See [/packages/core/src/utils/isDate.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isDate.ts#L0-L0).

## Overview

```ts
function isDate(target: any): target is Date;
```

## Description

Checks if a value is the Date constructor or a valid Date instance.
