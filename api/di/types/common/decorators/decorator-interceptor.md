---
url: /api/di/types/common/decorators/decorator-interceptor.md
description: api documentation of Interceptor from @tsed/di
---

## Usage

```typescript
import { Interceptor } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/interceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/interceptor.ts#L0-L0).

## Overview

```ts
function Interceptor(): ClassDecorator;
```

## Description

Declare an interceptor class for cross-cutting concerns.

Registers a class as an interceptor provider that can modify method execution behavior.
Interceptors must implement the `InterceptorMethods` interface.
All interceptors are singleton-scoped and constructed once.

### Usage

```typescript
import {Interceptor, InterceptorContext, InterceptorMethods} from "@tsed/di";

@Interceptor()
export class LogInterceptor implements InterceptorMethods {
  intercept(context: InterceptorContext) {
    console.log("Before:", context.propertyKey);
    const result = context.next();
    console.log("After:", result);
    return result;
  }
}

// Use with @Intercept decorator
@Injectable()
class MyService {
  @Intercept(LogInterceptor)
  async fetchData() {
    return "data";
  }
}
```
