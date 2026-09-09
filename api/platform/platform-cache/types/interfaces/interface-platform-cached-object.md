---
url: >-
  /api/platform/platform-cache/types/interfaces/interface-platform-cached-object.md
description: api documentation of PlatformCachedObject from @tsed/platform-cache
---

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
