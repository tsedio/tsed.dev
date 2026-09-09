---
url: /api/di/types/common/fn/function-lazy-inject.md
description: api documentation of lazyInject from @tsed/di
---

## Usage

```typescript
import { lazyInject } from "@tsed/di";
```

> See [/packages/di/src/common/fn/lazyInject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/lazyInject.ts#L0-L0).

## Overview

```ts
function lazyInject<Token>(factory: () => Promise<{
    default: TokenProvider<Token>;
}>): Promise<Token>;
```

## Description

Lazily load and inject a provider from a dynamic import.

Loads the provider module asynchronously, registers it if needed, calls `$onInit` if present,
and returns the resolved instance. Useful for code splitting and lazy loading dependencies.

### Usage

```typescript
import {lazyInject} from "@tsed/di";

// Lazy load a service
const service = await lazyInject(() => import("./HeavyService"));

// Use in a method
async loadPlugin() {
  const plugin = await lazyInject(() => import("./plugins/MyPlugin"));
  return plugin.initialize();
}
```

## default

```ts
default: TokenProvider<Token>;
```
