---
url: /api/orm/mongoose/types/decorators/decorator-auto.md
description: api documentation of Auto from @tsed/mongoose
---

## Usage

```typescript
import { Auto } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/auto.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/auto.ts#L0-L0).

## Overview

```ts
function Auto(auto?: boolean): PropertyDecorator;
```

## Description

If true, uses Mongoose's default \_id settings. Only allowed for ObjectIds

### Example

```typescript
@Model()
export class EventModel {
  @ExcludeIndexes()
  field: string;
}
```
