---
url: >-
  /api/platform/platform-exceptions/types/components/class-mongoose-error-filter.md
description: api documentation of MongooseErrorFilter from @tsed/platform-exceptions
---

## Usage

```typescript
import { MongooseErrorFilter } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/components/MongooseErrorFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/components/MongooseErrorFilter.ts#L0-L0).

## Overview

```ts
class MongooseErrorFilter extends ErrorFilter {
    catch(error: Error, ctx: BaseContext): void;
}
```

## catch

```ts
catch(error: Error, ctx: BaseContext): void;
```
