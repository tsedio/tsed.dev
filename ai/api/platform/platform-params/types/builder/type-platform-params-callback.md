---
title: PlatformParamsCallback from @tsed/platform-params
description: api documentation of PlatformParamsCallback from @tsed/platform-params
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformParamsCallback type
---
# PlatformParamsCallback - @tsed/platform-params

## Usage

```typescript
import { PlatformParamsCallback } from "@tsed/platform/platform-params/src/builder/PlatformParams";
```

> See [/packages/platform/platform-params/src/builder/PlatformParams.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-params/src/builder/PlatformParams.ts#L0-L0).

## Overview

```ts
type PlatformParamsCallback<Context extends DIContext = DIContext> = (scope: PlatformParamsScope<Context>) => Promise<any>;
```
