---
title: Sparse from @tsed/mongoose
description: api documentation of Sparse from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation Sparse decorator
---
# Sparse - @tsed/mongoose

## Usage

```typescript
import { Sparse } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/sparse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/sparse.ts#L0-L0).

## Overview

```ts
function Sparse(sparse?: boolean | number): PropertyDecorator;
```

<!-- Description -->

## Description

If [truthy](https://masteringjs.io/tutorials/fundamentals/truthy), Mongoose will
disallow changes to this path once the document is saved to the database for the first time. Read more
about [immutability in Mongoose here](http://thecodebarbarian.com/whats-new-in-mongoose-5-6-immutable-properties.html).

### Example

```typescript
@Model()
export class EventModel {
  @Sparse()
  field: string;
}
```
