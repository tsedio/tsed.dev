---
title: DecimalFormat from @tsed/mongoose
description: api documentation of DecimalFormat from @tsed/mongoose
meta:
 - name: keywords
   description: api typescript node.js documentation DecimalFormat class
---
# DecimalFormat - @tsed/mongoose

## Usage

```typescript
import { DecimalFormat } from "@tsed/mongoose";
```

> See [/packages/orm/mongoose/src/decorators/numberDecimal.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mongoose/src/decorators/numberDecimal.ts#L0-L0).

## Overview

```ts
class DecimalFormat implements FormatsMethods<string | number> {
    validate(num: string | number): boolean;
}
```

<!-- Members -->

## validate

```ts
validate(num: string | number): boolean;
```
