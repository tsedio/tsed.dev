---
url: /api/third-parties/directus-sdk/types/cache/type-directus-cache-options.md
description: api documentation of DirectusCacheOptions from @tsed/directus-sdk
---

## Usage

```typescript
import { DirectusCacheOptions } from "@tsed/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor";
```

> See [/packages/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor.ts#L0-L0).

## Overview

```ts
type DirectusCacheOptions = {
    ttl?: number;
    keyGenerator?: (...args: any[]) => string;
    namespace?: string;
    useSystemCache?: boolean;
};
```

## Description

Configuration options for the DirectusCacheInterceptor.

## ttl

```ts
ttl?: number;
```

## keyGenerator:

```ts
keyGenerator?: (...args: any[]) => string;
```

## namespace

```ts
namespace?: string;
```

## useSystemCache

```ts
useSystemCache?: boolean;
```
