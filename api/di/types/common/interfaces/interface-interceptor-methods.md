---
url: /api/di/types/common/interfaces/interface-interceptor-methods.md
description: api documentation of InterceptorMethods from @tsed/di
---

## Usage

```typescript
import { InterceptorMethods } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/InterceptorMethods.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/InterceptorMethods.ts#L0-L0).

## Overview

```ts
interface InterceptorMethods {
    intercept(context: InterceptorContext, next?: InterceptorNext): any;
}
```

## Description

Interface for implementing method interceptors.

Interceptors can modify method behavior, add logging, handle errors, or implement cross-cutting concerns.
Classes decorated with `@Interceptor()` must implement this interface.

### Usage

```typescript
import {Interceptor, InterceptorContext, InterceptorMethods} from "@tsed/di";

@Interceptor()
class CacheInterceptor implements InterceptorMethods {
  intercept(context: InterceptorContext) {
    const cacheKey = `${context.propertyKey.toString()}:${JSON.stringify(context.args)}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    const result = context.next();
    cache.set(cacheKey, result);
    return result;
  }
}
```

## intercept

```ts
intercept(context: InterceptorContext, next?: InterceptorNext): any;
```
