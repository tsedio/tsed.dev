---
title: lazyInject from @tsed/di
description: api documentation of lazyInject from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation lazyInject function
---
# lazyInject - @tsed/di

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

<!-- Description -->

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

<!-- Members -->

## default

```ts
default: TokenProvider<Token>;
```
