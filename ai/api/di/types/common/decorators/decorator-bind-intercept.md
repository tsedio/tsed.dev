---
title: bindIntercept from @tsed/di
description: api documentation of bindIntercept from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation bindIntercept decorator
---
# bindIntercept - @tsed/di

## Usage

```typescript
import { bindIntercept } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/intercept.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/intercept.ts#L0-L0).

## Overview

```ts
function bindIntercept(target: any, propertyKey: string | symbol, token: TokenProvider, options: Record<string, unknown>): TypedPropertyDescriptor<any> | undefined;
```
