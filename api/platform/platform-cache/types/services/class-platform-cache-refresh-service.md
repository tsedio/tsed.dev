---
url: >-
  /api/platform/platform-cache/types/services/class-platform-cache-refresh-service.md
description: api documentation of PlatformCacheRefreshService from @tsed/platform-cache
---

## Usage

```typescript
import { PlatformCacheRefreshService } from "@tsed/platform-cache";
```

> See [/packages/platform/platform-cache/src/services/PlatformCacheRefreshService.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/services/PlatformCacheRefreshService.ts#L0-L0).

## Overview

```ts
class PlatformCacheRefreshService {
    protected cache: PlatformCache;
    hasKeyInQueue(key: string): Promise<boolean>;
    addKeyToQueue(key: string): Promise<void>;
    deleteKeyFromQueue(key: string): Promise<void>;
    getRefreshThresholdWithJitter(key: string, refreshThreshold: number): number;
    hasRefreshCooldown(key: string): Promise<boolean>;
    addRefreshCooldown(key: string, refreshThreshold: number): Promise<void>;
    refreshInBackground(key: string, { refreshThreshold, ttl, cachedTTL }: {
        refreshThreshold?: number;
        ttl: any;
        cachedTTL?: number;
    }, next: Function, $ctx?: BaseContext): Promise<void>;
    acquireRefreshLock(key: string): Promise<() => void>;
    protected getRefreshCooldownKey(key: string): string;
}
```

## protected cache

```ts
protected cache: PlatformCache;
```

## hasKeyInQueue

```ts
hasKeyInQueue(key: string): Promise<boolean>;
```

## addKeyToQueue

```ts
addKeyToQueue(key: string): Promise<void>;
```

## deleteKeyFromQueue

```ts
deleteKeyFromQueue(key: string): Promise<void>;
```

## getRefreshThresholdWithJitter

```ts
getRefreshThresholdWithJitter(key: string, refreshThreshold: number): number;
```

## hasRefreshCooldown

```ts
hasRefreshCooldown(key: string): Promise<boolean>;
```

## addRefreshCooldown

```ts
addRefreshCooldown(key: string, refreshThreshold: number): Promise<void>;
```

## refreshInBackground

```ts
refreshInBackground(key: string, { refreshThreshold, ttl, cachedTTL }: {
     refreshThreshold?: number;
     ttl: any;
     cachedTTL?: number;
 }, next: Function, $ctx?: BaseContext): Promise<void>;
```

## acquireRefreshLock

```ts
acquireRefreshLock(key: string): Promise<() => void>;
```

## protected getRefreshCooldownKey

```ts
protected getRefreshCooldownKey(key: string): string;
```
