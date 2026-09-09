---
url: /api/di/types/common/decorators/decorator-get-interceptor-options.md
description: api documentation of getInterceptorOptions from @tsed/di
---

## Usage

```typescript
import { getInterceptorOptions } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/intercept.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/intercept.ts#L0-L0).

## Overview

```ts
function getInterceptorOptions<T>(target: Type<any>, propertyKey: string | symbol): T;
```
