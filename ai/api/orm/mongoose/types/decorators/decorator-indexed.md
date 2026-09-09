---
title: Indexed from @tsed/mongoose
description: api documentation of Indexed from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation Indexed decorator
---
# Indexed - @tsed/mongoose

## Usage

```typescript
import { Indexed } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/indexed.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/indexed.ts#L0-L0).

## Overview

```ts
function Indexed(index?: IndexOptions | boolean | string): PropertyDecorator;
```

<!-- Description -->

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
