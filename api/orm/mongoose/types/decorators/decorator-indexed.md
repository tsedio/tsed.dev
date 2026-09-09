---
url: /api/orm/mongoose/types/decorators/decorator-indexed.md
description: api documentation of Indexed from @tsed/mongoose
---

## Usage

```typescript
import { Indexed } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/indexed.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/indexed.ts#L0-L0).

## Overview

```ts
function Indexed(index?: IndexOptions | boolean | string): PropertyDecorator;
```

## Description

Tell Mongoose whether to define an index for the property.

### Example

```typescript
@Model()
export class EventModel {
  @Indexed()
  field: string;
}
```
