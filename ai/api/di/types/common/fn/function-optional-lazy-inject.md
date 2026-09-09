---
title: optionalLazyInject from @tsed/di
description: api documentation of optionalLazyInject from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation optionalLazyInject function
---
# optionalLazyInject - @tsed/di

## Usage

```typescript
import { optionalLazyInject } from "@tsed/di";
```

> See [/packages/di/src/common/fn/lazyInject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/lazyInject.ts#L0-L0).

## Overview

```ts
function optionalLazyInject<Token>(factory: () => Promise<{
    default: TokenProvider;
}>): Promise<Token | undefined>;
```

<!-- Description -->

## Description

Attempt to lazily load and inject a provider, returning undefined on failure.

Similar to `lazyInject` but catches errors and returns undefined instead of throwing.
Useful for optional dependencies that may not be available.

### Usage

```typescript
import {optionalLazyInject} from "@tsed/di";

// Try to load optional plugin
const plugin = await optionalLazyInject(() => import("./optional/Plugin"));

if (plugin) {
  plugin.activate();
}
```

<!-- Members -->

## default

```ts
default: TokenProvider;
```
