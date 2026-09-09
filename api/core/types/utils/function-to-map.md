---
url: /api/core/types/utils/function-to-map.md
description: api documentation of toMap from @tsed/core
---

## Usage

```typescript
import { toMap } from "@tsed/core";
```

> See [/packages/core/src/utils/toMap.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/toMap.ts#L0-L0).

## Overview

```ts
function toMap<K extends keyof any = any, V = any>(input: Record<K, V> | V[], keyOrFn?: ToMapIdentity<V>): Map<K, V>;
```

## Description

Converts an array or object to a Map using a key extraction strategy.
