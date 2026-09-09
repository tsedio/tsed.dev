---
url: /api/specs/schema/types/fn/function-lazy-ref.md
description: api documentation of lazyRef from @tsed/schema
---

## Usage

```typescript
import { lazyRef } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/lazyRef.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/lazyRef.ts#L0-L0).

## Overview

```ts
function lazyRef<T extends abstract new (...args: any) => any>(cb: () => T): JsonSchema<InstanceType<T>>;
```

## Description

Declare a sub schema which will be resolved later. Use this function when you have a circular reference between two schemes.
