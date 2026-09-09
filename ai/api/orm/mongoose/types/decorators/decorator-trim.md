---
title: Trim from @tsed/mongoose
description: api documentation of Trim from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation Trim decorator
---
# Trim - @tsed/mongoose

## Usage

```typescript
import { Trim } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/trim.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/trim.ts#L0-L0).

## Overview

```ts
function Trim(): Function;
```

<!-- Description -->

## Description

Tell Mongoose to make the property trimmable.

### Example

```typescript
@Model()
export class EventModel {
  @Trim()
  name: string;
}
```
