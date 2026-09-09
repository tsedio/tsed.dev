---
url: /api/orm/mongoose/types/decorators/decorator-unique.md
description: api documentation of Unique from @tsed/mongoose
---

## Usage

```typescript
import { Unique } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/unique.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/unique.ts#L0-L0).

## Overview

```ts
function Unique(unique?: boolean | any): Function;
```

## Description

Tell Mongoose to ensure a unique index is created for this path.

### Example

```typescript
@Model()
export class EventModel {
  @Unique()
  index: string;
}
```
