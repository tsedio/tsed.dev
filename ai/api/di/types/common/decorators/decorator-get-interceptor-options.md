---
title: getInterceptorOptions from @tsed/di
description: api documentation of getInterceptorOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation getInterceptorOptions decorator
---
# getInterceptorOptions - @tsed/di

## Usage

```typescript
import { getInterceptorOptions } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/intercept.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/intercept.ts#L0-L0).

## Overview

```ts
function getInterceptorOptions<T>(target: Type<any>, propertyKey: string | symbol): T;
```
