---
url: /api/platform/platform-params/types/builder/type-platform-params-scope.md
description: api documentation of PlatformParamsScope from @tsed/platform-params
---

## Usage

```typescript
import { PlatformParamsScope } from "@tsed/platform/platform-params/src/builder/PlatformParams";
```

> See [/packages/platform/platform-params/src/builder/PlatformParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/builder/PlatformParams.ts#L0-L0).

## Overview

```ts
type PlatformParamsScope<Context extends DIContext = DIContext> = {
    $ctx: Context;
} & Record<string, any>;
```

## $ctx

```ts
$ctx: Context;
```
