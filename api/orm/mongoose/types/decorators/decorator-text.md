---
url: /api/orm/mongoose/types/decorators/decorator-text.md
description: api documentation of Text from @tsed/mongoose
---

## Usage

```typescript
import { Text } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/text.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/text.ts#L0-L0).

## Overview

```ts
function Text(text?: boolean | number | any): PropertyDecorator;
```

## Description

If [truthy](https://masteringjs.io/tutorials/fundamentals/truthy), Mongoose
will build a text index on this path.

### Example

```typescript
@Model()
export class EventModel {
  @Text()
  field: string;
}
```
