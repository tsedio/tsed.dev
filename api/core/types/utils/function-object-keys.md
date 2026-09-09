---
url: /api/core/types/utils/function-object-keys.md
description: api documentation of objectKeys from @tsed/core
---

## Usage

```typescript
import { objectKeys } from "@tsed/core";
```

> See [/packages/core/src/utils/objectKeys.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/objectKeys.ts#L0-L0).

## Overview

```ts
function objectKeys(obj: any): string[];
```

## Description

Returns object keys excluding protected keys like constructor and prototype.
