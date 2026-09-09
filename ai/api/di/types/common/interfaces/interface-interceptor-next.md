---
title: InterceptorNext from @tsed/di
description: api documentation of InterceptorNext from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation InterceptorNext interface
---
# InterceptorNext - @tsed/di

## Usage

```typescript
import { InterceptorNext } from "@tsed/di";
```

> See [/packages/di/src/common/interfaces/InterceptorContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/interfaces/InterceptorContext.ts#L0-L0).

## Overview

```ts
interface InterceptorNext {
    <T>(err?: Error): T;
}
```

<!-- Description -->

## Description

Function signature for proceeding to the next interceptor or method.

Call this function in an interceptor to continue the interceptor chain.
Pass an error to short-circuit execution and propagate the error.

<!-- Members -->

##

```ts
<T>(err?: Error): T;
```
