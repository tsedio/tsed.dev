---
title: NumberDecimal from @tsed/mongoose
description: api documentation of NumberDecimal from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation NumberDecimal decorator
---
# NumberDecimal - @tsed/mongoose

## Usage

```typescript
import { NumberDecimal } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/numberDecimal.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/numberDecimal.ts#L0-L0).

## Overview

```ts
function NumberDecimal(type?: any): any;
```

-   **type** (`any`): Optional. decimal type constructor

<!-- Description -->

## Description

Tell Mongoose whether to define an Decimal128 property.
Will be serialized as `number` with format as `decimal`.

### Example

```typescript
@Model()
export class PriceModel {
  @NumberDecimal()
  price: Decimal128;
}
```

Optionally using custom decimal type, such as `Big` from big.js

```typescript
@Model()
export class PriceModel {
  @NumberDecimal(Big)
  price: Big;
}
```
