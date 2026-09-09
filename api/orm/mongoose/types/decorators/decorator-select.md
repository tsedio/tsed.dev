---
url: /api/orm/mongoose/types/decorators/decorator-select.md
description: api documentation of Select from @tsed/mongoose
---

## Usage

```typescript
import { Select } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/select.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/select.ts#L0-L0).

## Overview

```ts
function Select(select?: boolean | any): Function;
```

## Description

Tell Mongoose to set default select() behavior for this path.

### Example

```typescript
@Model()
export class EventModel {
  @Select()
  field: string;
}
```
