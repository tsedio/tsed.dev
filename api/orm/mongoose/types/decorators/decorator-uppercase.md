---
url: /api/orm/mongoose/types/decorators/decorator-uppercase.md
description: api documentation of Uppercase from @tsed/mongoose
---

## Usage

```typescript
import { Uppercase } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/uppercase.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/uppercase.ts#L0-L0).

## Overview

```ts
function Uppercase(uppercase?: boolean): PropertyDecorator;
```

## Description

If truthy, Mongoose will add a custom setter that uppercases this string using JavaScript's built-in String#toUpperCase().

### Example

```typescript
@Model()
export class EventModel {
  @Uppercase()
  field: string;
}
```
