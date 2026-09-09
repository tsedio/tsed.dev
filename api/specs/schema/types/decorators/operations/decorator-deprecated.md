---
url: /api/specs/schema/types/decorators/operations/decorator-deprecated.md
description: api documentation of Deprecated from @tsed/schema
---

## Usage

```typescript
import { Deprecated } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/operations/deprecated.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/operations/deprecated.ts#L0-L0).

## Overview

```ts
function Deprecated(deprecated?: boolean): (...args: any[]) => any;
```

## Description

Add deprecated metadata on the decorated element.

## Examples

```typescript

@Deprecated()
class MyCtrl {
  @Deprecated()
  @Get("/")
  method(){
  }
}
```
