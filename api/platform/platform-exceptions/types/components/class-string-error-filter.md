---
url: >-
  /api/platform/platform-exceptions/types/components/class-string-error-filter.md
description: api documentation of StringErrorFilter from @tsed/platform-exceptions
---

## Usage

```typescript
import { StringErrorFilter } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/components/StringErrorFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/components/StringErrorFilter.ts#L0-L0).

## Overview

```ts
class StringErrorFilter implements ExceptionFilterMethods {
    catch(error: string, ctx: BaseContext): void;
}
```

## catch

```ts
catch(error: string, ctx: BaseContext): void;
```
