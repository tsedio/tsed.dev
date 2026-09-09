---
url: /api/di/types/common/decorators/interface-controller-options.md
description: api documentation of ControllerOptions from @tsed/di
---

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
