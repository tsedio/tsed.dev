---
url: /api/orm/mongoose/types/decorators/decorator-expires.md
description: api documentation of Expires from @tsed/mongoose
---

## Usage

```typescript
import { Expires } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/expires.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/expires.ts#L0-L0).

## Overview

```ts
function Expires(expires: number | string | Date): PropertyDecorator;
```

## Description

Defines a TTL index on this path. Only allowed for dates.

### Example

```typescript
@Model()
export class EventModel {
  @Expires('5d')
  field: string;
}
```
