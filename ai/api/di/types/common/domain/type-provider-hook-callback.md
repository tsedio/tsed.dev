---
title: ProviderHookCallback from @tsed/di
description: api documentation of ProviderHookCallback from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ProviderHookCallback type
---
# ProviderHookCallback - @tsed/di

## Usage

```typescript
import { ProviderHookCallback } from "@tsed/di/src/common/domain/Provider";
```

> See [/packages/di/src/common/domain/Provider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/Provider.ts#L0-L0).

## Overview

```ts
type ProviderHookCallback<T = any> = (instance: T, ...args: unknown[]) => Promise<void> | void;
```

<!-- Description -->

## Description

Callback function type for provider lifecycle hooks.
