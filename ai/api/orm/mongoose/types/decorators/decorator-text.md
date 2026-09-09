---
title: Text from @tsed/mongoose
description: api documentation of Text from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation Text decorator
---
# Text - @tsed/mongoose

## Usage

```typescript
import { Text } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/text.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/text.ts#L0-L0).

## Overview

```ts
function Text(text?: boolean | number | any): PropertyDecorator;
```

<!-- Description -->

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
