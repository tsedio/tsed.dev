---
url: /api/di/types/common/domain/type-provider-hook-callback.md
description: api documentation of ProviderHookCallback from @tsed/di
---

## Usage

```typescript
import { ProviderHookCallback } from "@tsed/di/src/common/domain/Provider";
```

> See [/packages/di/src/common/domain/Provider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/Provider.ts#L0-L0).

## Overview

```ts
type ProviderHookCallback<T = any> = (instance: T, ...args: unknown[]) => Promise<void> | void;
```

## Description

Callback function type for provider lifecycle hooks.
