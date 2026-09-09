---
title: OnCreateCacheManager from @tsed/platform-cache
description: api documentation of OnCreateCacheManager from @tsed/platform-cache
meta:
 - name: keywords
   description: api typescript node.js documentation OnCreateCacheManager interface
---
# OnCreateCacheManager - @tsed/platform-cache

## Usage

```typescript
import { OnCreateCacheManager } from "@tsed/platform-cache";
```

> See [/packages/platform/platform-cache/src/interfaces/interfaces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/interfaces/interfaces.ts#L0-L0).

## Overview

```ts
interface OnCreateCacheManager {
    $onCreateCacheManager(cache: CacheManager): void | Promise<void>;
}
```

<!-- Members -->

## $onCreateCacheManager

```ts
$onCreateCacheManager(cache: CacheManager): void | Promise<void>;
```
