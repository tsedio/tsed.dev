---
title: PlatformParamsScope from @tsed/platform-params
description: api documentation of PlatformParamsScope from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformParamsScope type
---
# PlatformParamsScope - @tsed/platform-params

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

<!-- Members -->

## $ctx

```ts
$ctx: Context;
```
