---
title: PlatformCacheSettings from @tsed/platform-cache
description: api documentation of PlatformCacheSettings from @tsed/platform-cache
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformCacheSettings type
---
# PlatformCacheSettings - @tsed/platform-cache

## Usage

```typescript
import { PlatformCacheSettings } from "@tsed/platform/platform-cache/src/interfaces/interfaces";
```

> See [/packages/platform/platform-cache/src/interfaces/interfaces.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/interfaces/interfaces.ts#L0-L0).

## Overview

```ts
type PlatformCacheSettings<Config extends Record<string, any> = any, S extends Store = any> = CachingConfig<Config> & {
    caches?: Cache[];
    store?: "memory" | Store | FactoryStore<S, Config>;
    max?: number;
    keyResolver?: (args: any[], ctx: BaseContext) => string;
    prefix?: string;
    ignoreHeaders?: string[];
    [key: string]: any;
};
```

<!-- Members -->

## caches

```ts
caches?: Cache[];
```

## store

```ts
store?: "memory" | Store | FactoryStore<S, Config>;
```

## max

```ts
max?: number;
```

## keyResolver:

```ts
keyResolver?: (args: any[], ctx: BaseContext) => string;
```

## prefix

```ts
prefix?: string;
```

## ignoreHeaders

```ts
ignoreHeaders?: string[];
```

List of headers to ignore when caching the response. Default: \["content-length", "x-request-id", "cache-control", "vary", "content-encoding"]

## \[key: string]

```ts
[key: string]: any;
```

You may pass in any other arguments these will be passed on to the `create` method of your store,
otherwise they will be ignored.
