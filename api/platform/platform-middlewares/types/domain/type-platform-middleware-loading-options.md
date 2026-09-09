---
url: >-
  /api/platform/platform-middlewares/types/domain/type-platform-middleware-loading-options.md
description: >-
  api documentation of PlatformMiddlewareLoadingOptions from
  @tsed/platform-middlewares
---

## Usage

```typescript
import { PlatformMiddlewareLoadingOptions } from "@tsed/platform/platform-middlewares/src/domain/PlatformMiddlewareSettings";
```

> See [/packages/platform/platform-middlewares/src/domain/PlatformMiddlewareSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-middlewares/src/domain/PlatformMiddlewareSettings.ts#L0-L0).

## Overview

```ts
type PlatformMiddlewareLoadingOptions = {
    env?: Env;
    use: Function | Type<any> | string;
    hook?: string;
    options?: any;
};
```

## env

```ts
env?: Env;
```

## use

```ts
use: Function | Type<any> | string;
```

## hook

```ts
hook?: string;
```

## options

```ts
options?: any;
```
