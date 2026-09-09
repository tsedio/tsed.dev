---
url: /api/specs/schema/types/domain/type-schema-key.md
description: api documentation of SchemaKey from @tsed/schema
---

## Usage

```typescript
import { SchemaKey } from "@tsed/specs/schema/src/domain/types";
```

> See [/packages/specs/schema/src/domain/types.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/types.ts#L0-L0).

## Overview

```ts
type SchemaKey<T> = ObjectKeys<T> extends never ? string : Extract<ObjectKeys<T>, string>;
```
