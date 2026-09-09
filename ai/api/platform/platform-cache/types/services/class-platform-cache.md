---
title: PlatformCache from @tsed/platform-cache
description: api documentation of PlatformCache from @tsed/platform-cache
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformCache class
---
# PlatformCache - @tsed/platform-cache

## Usage

```typescript
import { PlatformCache } from "@tsed/platform-cache";
```

> See [/packages/platform/platform-cache/src/services/PlatformCache.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/services/PlatformCache.ts#L0-L0).

## Overview

```ts
class PlatformCache {
    get cache(): CacheManager | undefined;
    $onInit(): Promise<void>;
    getKeysOf(target: Type<any>, propertyKey: string | symbol): Promise<string[]>;
    cachePrefix(): string;
    buildNamespace(target: Type<any>, propertyKey: string | symbol): (string | symbol)[];
    buildEntryKey(target: Type<any>, propertyKey: string | symbol, keyArgs: string): string;
    buildEntryPattern(target: Type<any>, propertyKey: string | symbol, suffix?: string): string;
    buildInternalKey(namespace: "queue" | "refresh-cooldown", key: string): string;
    disabled(): boolean;
    defaultKeyResolver(): (args: any[], ctx?: any) => string;
    defaultTtl(): Ttl | undefined;
    calculateTTL(result?: any, currentTtl?: Ttl): number | undefined;
    ttl(key: string): Promise<void> | Promise<number>;
    wrap<T>(key: string, fetch: () => Promise<T>, ttl?: number): Promise<T>;
    get<T>(key: string, options?: JsonDeserializerOptions): Promise<T | undefined>;
    set<T>(key: string, value: any, options?: CachingConfig<T>): Promise<T | undefined>;
    getCachedObject(key: string): Promise<PlatformCachedObject | undefined>;
    setCachedObject(key: string, data: any, opts: {
        ttl?: number;
    } & Record<string, any>): Promise<void>;
    del(key: string): Promise<void>;
    reset(): Promise<void>;
    keys(...args: any[]): Promise<string[]>;
    deleteKeys(patterns: string): Promise<string[]>;
    getMatchingKeys(patterns: string): Promise<string[]>;
    deleteMatchingKeys(patterns: string): Promise<string[]>;
    refresh(callback: () => Promise<any> | any): any;
    isForceRefresh(): boolean;
    protected createCacheManager(settings: PlatformCacheSettings): Promise<MultiCache | import("cache-manager").MemoryCache>;
}
```

<!-- Members -->

## get cache

```ts
get cache(): CacheManager | undefined;
```

## $onInit

```ts
$onInit(): Promise<void>;
```

## getKeysOf

```ts
getKeysOf(target: Type<any>, propertyKey: string | symbol): Promise<string[]>;
```

## cachePrefix

```ts
cachePrefix(): string;
```

Returns the global cache key prefix from settings (`cache.prefix`).

## buildNamespace

```ts
buildNamespace(target: Type<any>, propertyKey: string | symbol): (string | symbol)[];
```

Builds the stable namespace segments used by cached entries for a method.
The namespace combines the global cache prefix (if configured) and the method prefix.

## buildEntryKey

```ts
buildEntryKey(target: Type<any>, propertyKey: string | symbol, keyArgs: string): string;
```

Builds the final cache key for a method call.

## buildEntryPattern

```ts
buildEntryPattern(target: Type<any>, propertyKey: string | symbol, suffix?: string): string;
```

Builds a key pattern scoped to a cached method namespace.
Useful for listing/invalidation of keys produced by the same cached method.

## buildInternalKey

```ts
buildInternalKey(namespace: "queue" | "refresh-cooldown", key: string): string;
```

Builds internal keys used by cache housekeeping features
(refresh queue and refresh cooldown markers).

## disabled

```ts
disabled(): boolean;
```

## defaultKeyResolver

```ts
defaultKeyResolver(): (args: any[], ctx?: any) => string;
```

## defaultTtl

```ts
defaultTtl(): Ttl | undefined;
```

## calculateTTL

```ts
calculateTTL(result?: any, currentTtl?: Ttl): number | undefined;
```

## ttl

```ts
ttl(key: string): Promise<void> | Promise<number>;
```

## wrap

```ts
wrap<T>(key: string, fetch: () => Promise<T>, ttl?: number): Promise<T>;
```

## get

```ts
get<T>(key: string, options?: JsonDeserializerOptions): Promise<T | undefined>;
```

## set

```ts
set<T>(key: string, value: any, options?: CachingConfig<T>): Promise<T | undefined>;
```

## getCachedObject

```ts
getCachedObject(key: string): Promise<PlatformCachedObject | undefined>;
```

## setCachedObject

```ts
setCachedObject(key: string, data: any, opts: {
     ttl?: number;
 } & Record<string, any>): Promise<void>;
```

## del

```ts
del(key: string): Promise<void>;
```

## reset

```ts
reset(): Promise<void>;
```

## keys

```ts
keys(...args: any[]): Promise<string[]>;
```

## deleteKeys

```ts
deleteKeys(patterns: string): Promise<string[]>;
```

## getMatchingKeys

```ts
getMatchingKeys(patterns: string): Promise<string[]>;
```

Use micromatch instead native patterns. Use this method if the native store method doesn't support glob patterns

## deleteMatchingKeys

```ts
deleteMatchingKeys(patterns: string): Promise<string[]>;
```

## refresh

```ts
refresh(callback: () => Promise<any> | any): any;
```

## isForceRefresh

```ts
isForceRefresh(): boolean;
```

## protected createCacheManager

```ts
protected createCacheManager(settings: PlatformCacheSettings): Promise<MultiCache | import("cache-manager").MemoryCache>;
```
