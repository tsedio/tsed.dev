---
url: /api/core/types/utils/function-uniq-by.md
description: api documentation of uniqBy from @tsed/core
---

## Usage

```typescript
import { uniqBy } from "@tsed/core";
```

> See [/packages/core/src/utils/uniq.ts](https://github.com/tsedio/tsed/blob/v8.40.2/packages/core/src/utils/uniq.ts#L0-L0).

## Overview

```ts
function uniqBy<T = any>(list: T[], key?: string): T[];
```

## Description

Returns a new array with duplicate objects removed based on a specified property key.
