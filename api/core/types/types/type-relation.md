---
url: /api/core/types/types/type-relation.md
description: api documentation of Relation from @tsed/core
---

## Usage

```typescript
import { Relation } from "@tsed/core/src/types/Relation";
```

> See [/packages/core/src/types/Relation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Relation.ts#L0-L0).

## Overview

```ts
type Relation<T> = T;
```

## Description

Type marker for expressing a relationship between models/DTOs.

In some contexts, `Relation<T>` is used to indicate that a property represents a related entity of type `T`. It is a transparent alias for `T`, primarily serving documentation and intent.
