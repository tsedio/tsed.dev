---
url: /api/orm/mongoose/types/decorators/class-decimal-format.md
description: api documentation of DecimalFormat from @tsed/mongoose
---

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

## validate

```ts
validate(num: string | number): boolean;
```
