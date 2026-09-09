---
url: /api/core/types/utils/function-uniq.md
description: api documentation of uniq from @tsed/core
---

## Usage

```typescript
import { uniq } from "@tsed/core";
```

> See [/packages/core/src/utils/uniq.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/uniq.ts#L0-L0).

## Overview

```ts
function uniq<T = any>(list: T[]): T[];
```

## Description

Returns a new array with duplicate values removed.
