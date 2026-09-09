---
url: /api/orm/mongoose/types/decorators/decorator-lowercase.md
description: api documentation of Lowercase from @tsed/mongoose
---

## Usage

```typescript
import { Lowercase } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/lowercase.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/lowercase.ts#L0-L0).

## Overview

```ts
function Lowercase(lowercase?: boolean): PropertyDecorator;
```

## Description

If truthy, Mongoose will add a custom setter that lowercases this string using JavaScript's built-in String#toLowerCase().

### Example

```typescript
@Model()
export class EventModel {
  @Lowercase()
  field: string;
}
```
