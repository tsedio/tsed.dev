---
title: DirectusCacheOptions from @tsed/directus-sdk
description: api documentation of DirectusCacheOptions from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation DirectusCacheOptions type
---
# DirectusCacheOptions - @tsed/directus-sdk

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

<!-- Description -->

## Description

Configuration options for the DirectusCacheInterceptor.

<!-- Members -->

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
