---
url: /api/orm/objection/types/domain/type-relationship-opts.md
description: api documentation of RelationshipOpts from @tsed/objection
---

## Usage

```typescript
import { RelationshipOpts } from "@tsed/orm/objection/src/domain/RelationshipOpts";
```

> See [/packages/orm/objection/src/domain/RelationshipOpts.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/objection/src/domain/RelationshipOpts.ts#L0-L0).

## Overview

```ts
type RelationshipOpts = (RelationshipOptsWithThrough | RelationshipOptsWithoutThrough) & {
    type?: ModelClassSpecifier;
};
```

## type

```ts
type?: ModelClassSpecifier;
```
