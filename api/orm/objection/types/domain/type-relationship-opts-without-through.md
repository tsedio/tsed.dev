---
url: /api/orm/objection/types/domain/type-relationship-opts-without-through.md
description: api documentation of RelationshipOptsWithoutThrough from @tsed/objection
---

## Usage

```typescript
import { RelationshipOptsWithoutThrough } from "@tsed/orm/objection/src/domain/RelationshipOpts";
```

> See [/packages/orm/objection/src/domain/RelationshipOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/objection/src/domain/RelationshipOpts.ts#L0-L0).

## Overview

```ts
type RelationshipOptsWithoutThrough = Omit<RelationshipOptsWithThrough, "through">;
```
