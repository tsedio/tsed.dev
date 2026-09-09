---
title: Intercept from @tsed/di
description: api documentation of Intercept from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation Intercept decorator
---
# Intercept - @tsed/di

## Usage

```typescript
import { Intercept } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/intercept.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/intercept.ts#L0-L0).

## Overview

```ts
function Intercept<T extends InterceptorMethods>(interceptor: Type<T>, options?: any): any;
```

-   **interceptor** (`Type<T>`): The interceptor class token

-   **options** (`any`): Optional. configuration passed to the interceptor

<!-- Description -->

## Description

Apply an interceptor to a method or all methods of a class.

Wraps method execution with interceptor logic for cross-cutting concerns like logging,
validation, caching, or error handling. Can be applied to individual methods or entire classes.

### Usage

```typescript
import {Injectable, Intercept, Interceptor, InterceptorContext, InterceptorMethods} from "@tsed/di";

@Interceptor()
class LogInterceptor implements InterceptorMethods {
  intercept(context: InterceptorContext) {
    console.log("Before:", context.propertyKey);
    const result = context.next();
    console.log("After:", result);
    return result;
  }
}

@Injectable()
class UserService {
  @Intercept(LogInterceptor)
  async findById(id: string) {
    return {id, name: "User"};
  }
}

// Apply to all methods
@Injectable()
@Intercept(LogInterceptor)
class ProductService {
  getAll() {}
  getById(id: string) {}
}
```
