---
url: /api/orm/mongoose/types/decorators/decorator-exclude-indexes.md
description: api documentation of ExcludeIndexes from @tsed/mongoose
---

## Usage

```typescript
import { ExcludeIndexes } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/excludeIndexes.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/excludeIndexes.ts#L0-L0).

## Overview

```ts
function ExcludeIndexes(excludeIndexes?: boolean): PropertyDecorator;
```

## Description

If true, Mongoose will skip gathering indexes on subpaths. Only allowed for subdocuments and subdocument arrays.

### Example

```typescript
@Model()
export class EventModel {
  @ExcludeIndexes()
  field: string;
}
```
