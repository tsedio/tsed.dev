---
url: /api/specs/schema/types/domain/type-schema-pick.md
description: api documentation of SchemaPick from @tsed/schema
---

## Usage

```typescript
import { SchemaPick } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type SchemaPick<T, K extends PropertyKey> = [ObjectPortion<T>] extends [never] ? T : NonObjectPortion<T> extends never ? ObjectPick<T, K> : ObjectPick<T, K> | NonObjectPortion<T>;
```
