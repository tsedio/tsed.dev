---
url: /api/di/types/common/interfaces/interface-interceptor-context.md
description: api documentation of InterceptorContext from @tsed/di
---

## Usage

```typescript
import { InterceptorContext } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/InterceptorContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/InterceptorContext.ts#L0-L0).

## Overview

```ts
interface InterceptorContext<Klass = Type, Opts = any> {
    target: Klass;
    propertyKey: string | symbol;
    args: unknown[];
    next: InterceptorNext;
    options?: Opts;
}
```

## Description

Context object passed to interceptors during method execution.

Provides access to the target instance, method name, arguments, and control flow
for intercepting and modifying method behavior.

### Usage

```typescript
import {Interceptor, InterceptorContext, InterceptorMethods} from "@tsed/di";

@Interceptor()
class LogInterceptor implements InterceptorMethods {
  intercept(context: InterceptorContext) {
    console.log("Before:", context.propertyKey);
    const result = context.next();
    console.log("After:", result);
    return result;
  }
}
```

## target

```ts
target: Klass;
```

## propertyKey

```ts
propertyKey: string | symbol;
```

## args

```ts
args: unknown[];
```

## next

```ts
next: InterceptorNext;
```

## options

```ts
options?: Opts;
```
