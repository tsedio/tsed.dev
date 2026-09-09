---
title: ControllerOptions from @tsed/di
description: api documentation of ControllerOptions from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ControllerOptions interface
---
# ControllerOptions - @tsed/di

## Usage

```typescript
import { ControllerOptions } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/controller.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/controller.ts#L0-L0).

## Overview

```ts
interface ControllerOptions extends Partial<ProviderOpts<any>> {
    path?: PathType;
    children?: Type<any>[];
    middlewares?: Partial<ControllerMiddlewares>;
}
```

<!-- Members -->

## path

```ts
path?: PathType;
```

## children

```ts
children?: Type<any>[];
```

## middlewares

```ts
middlewares?: Partial<ControllerMiddlewares>;
```
