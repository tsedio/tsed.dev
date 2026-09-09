---
url: >-
  /api/platform/platform-exceptions/types/interfaces/interface-exception-filter-methods.md
description: api documentation of ExceptionFilterMethods from @tsed/platform-exceptions
---

## Usage

```typescript
import { ExceptionFilterMethods } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/interfaces/ExceptionFilterMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/interfaces/ExceptionFilterMethods.ts#L0-L0).

## Overview

```ts
interface ExceptionFilterMethods<T = unknown> {
    catch(error: T, ctx: DIContext): void;
}
```

## catch

```ts
catch(error: T, ctx: DIContext): void;
```
