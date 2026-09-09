---
url: /api/specs/schema/types/domain/type-schema-merge.md
description: api documentation of SchemaMerge from @tsed/schema
---

## Usage

```typescript
import { SchemaMerge } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type SchemaMerge<T, U> = [MergedObjectPortion<T, U>] extends [never] ? NonObjectPortion<T> | NonObjectPortion<U> : NonObjectPortion<T> extends never ? NonObjectPortion<U> extends never ? MergedObjectPortion<T, U> : MergedObjectPortion<T, U> | NonObjectPortion<U> : MergedObjectPortion<T, U> | NonObjectPortion<T> | NonObjectPortion<U>;
```
