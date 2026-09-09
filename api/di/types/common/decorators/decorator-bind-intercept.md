---
url: /api/di/types/common/decorators/decorator-bind-intercept.md
description: api documentation of bindIntercept from @tsed/di
---

## Usage

```typescript
import { bindIntercept } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/intercept.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/intercept.ts#L0-L0).

## Overview

```ts
function bindIntercept(target: any, propertyKey: string | symbol, token: TokenProvider, options: Record<string, unknown>): TypedPropertyDescriptor<any> | undefined;
```
