---
url: /api/di/types/common/interfaces/interface-interceptor-next.md
description: api documentation of InterceptorNext from @tsed/di
---

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

## Description

Function signature for proceeding to the next interceptor or method.

Call this function in an interceptor to continue the interceptor chain.
Pass an error to short-circuit execution and propagate the error.

##

```ts
<T>(err?: Error): T;
```
