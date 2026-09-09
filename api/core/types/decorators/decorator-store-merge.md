---
url: /api/core/types/decorators/decorator-store-merge.md
description: api documentation of StoreMerge from @tsed/core
---

## Usage

```typescript
import { StoreMerge } from "@tsed/core";
```

> See [/packages/core/src/decorators/storeMerge.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/decorators/storeMerge.ts#L0-L0).

## Overview

```ts
function StoreMerge(key: any, value: any): Function;
```

## Description

Creates a decorator that merges a key-value pair into the target's Store metadata.

Uses {@link Store.merge} internally to deep-merge the provided value with existing metadata.
