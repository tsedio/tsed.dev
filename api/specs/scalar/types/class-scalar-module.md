---
url: /api/specs/scalar/types/class-scalar-module.md
description: api documentation of ScalarModule from @tsed/scalar
---

## Usage

```typescript
import { ScalarModule } from "@tsed/scalar";
```

> See [/packages/specs/scalar/src/ScalarModule.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/scalar/src/ScalarModule.ts#L0-L0).

## Overview

```ts
class ScalarModule extends OpenAPIBaseModule {
    readonly name = "Scalar";
    readonly rootDir: string;
    get settings(): any[];
    protected createRouter(conf: ScalarSettings): import("@tsed/platform-router").PlatformRouter;
}
```

## readonly name

```ts
readonly name = "Scalar";
```

## readonly rootDir

```ts
readonly rootDir: string;
```

## get settings

```ts
get settings(): any[];
```

## protected createRouter

```ts
protected createRouter(conf: ScalarSettings): import("@tsed/platform-router").PlatformRouter;
```
