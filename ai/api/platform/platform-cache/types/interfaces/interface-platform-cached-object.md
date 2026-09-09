---
title: PlatformCachedObject from @tsed/platform-cache
description: api documentation of PlatformCachedObject from @tsed/platform-cache
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformCachedObject interface
---
# PlatformCachedObject - @tsed/platform-cache

## Usage

```typescript
import { PlatformCachedObject } from "@tsed/platform-cache";
```

> See [/packages/platform/platform-cache/src/interfaces/PlatformCachedObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/interfaces/PlatformCachedObject.ts#L0-L0).

## Overview

```ts
interface PlatformCachedObject {
    ttl?: number;
    args: any[];
    data: any;
    expires: number;
    headers: Record<string, number | string | string[]>;
}
```

<!-- Members -->

## ttl

```ts
ttl?: number;
```

## args

```ts
args: any[];
```

## data

```ts
data: any;
```

## expires

```ts
expires: number;
```

## headers

```ts
headers: Record<string, number | string | string[]>;
```
