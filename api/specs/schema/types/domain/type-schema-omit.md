---
url: /api/specs/schema/types/domain/type-schema-omit.md
description: api documentation of SchemaOmit from @tsed/schema
---

## Usage

```typescript
import { SchemaOmit } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type SchemaOmit<T, K extends PropertyKey> = [ObjectPortion<T>] extends [never] ? T : NonObjectPortion<T> extends never ? ObjectOmit<T, K> : ObjectOmit<T, K> | NonObjectPortion<T>;
```
