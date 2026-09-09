---
url: /api/orm/mikro-orm/types/interceptors/class-transactional-interceptor.md
description: api documentation of TransactionalInterceptor from @tsed/mikro-orm
---

## Usage

```typescript
import { TransactionalInterceptor } from "@tsed/mikro-orm";
```

> See [/packages/orm/mikro-orm/src/interceptors/TransactionalInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/orm/mikro-orm/src/interceptors/TransactionalInterceptor.ts#L0-L0).

## Overview

```ts
class TransactionalInterceptor implements InterceptorMethods {
    
    
    constructor(injector: InjectorService, registry: MikroOrmRegistry, context: MikroOrmContext, logger: Logger, retryStrategy?: RetryStrategy | undefined);
    intercept(context: InterceptorContext<unknown>, next: InterceptorNext): Promise<unknown>;
    
    
    
    
}
```

## intercept

```ts
intercept(context: InterceptorContext<unknown>, next: InterceptorNext): Promise<unknown>;
```
