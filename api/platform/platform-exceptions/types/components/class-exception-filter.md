---
url: /api/platform/platform-exceptions/types/components/class-exception-filter.md
description: api documentation of ExceptionFilter from @tsed/platform-exceptions
---

## Usage

```typescript
import { ExceptionFilter } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/components/ExceptionFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/components/ExceptionFilter.ts#L0-L0).

## Overview

```ts
class ExceptionFilter extends ErrorFilter {
    catch(error: Exception, ctx: BaseContext): void;
}
```

## catch

```ts
catch(error: Exception, ctx: BaseContext): void;
```
