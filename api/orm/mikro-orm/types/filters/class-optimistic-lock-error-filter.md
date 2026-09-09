---
url: /api/orm/mikro-orm/types/filters/class-optimistic-lock-error-filter.md
description: api documentation of OptimisticLockErrorFilter from @tsed/mikro-orm
---

## Usage

```typescript
import { OptimisticLockErrorFilter } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/filters/OptimisticLockErrorFilter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/filters/OptimisticLockErrorFilter.ts#L0-L0).

## Overview

```ts
class OptimisticLockErrorFilter implements ExceptionFilterMethods<OptimisticLockError> {
    catch(exception: OptimisticLockError, ctx: PlatformContext): void;
}
```

## catch

```ts
catch(exception: OptimisticLockError, ctx: PlatformContext): void;
```
