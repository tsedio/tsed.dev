---
url: /api/di/types/common/fn/function-destroy-injector.md
description: api documentation of destroyInjector from @tsed/di
---

## Usage

```typescript
import { destroyInjector } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injector.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injector.ts#L0-L0).

## Overview

```ts
function destroyInjector(): Promise<void>;
```

## Description

Destroy the current injector and create a fresh instance.

Calls the `destroy()` lifecycle hook on all providers and resets the global injector.
Primarily used in testing to reset the DI container between tests.
