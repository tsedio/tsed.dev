---
url: >-
  /api/platform/platform-cache/types/interceptors/class-platform-cache-interceptor.md
description: api documentation of PlatformCacheInterceptor from @tsed/platform-cache
---

## Usage

```typescript
import { PlatformCacheInterceptor } from "@tsed/platform-cache";
```

> See [/packages/platform/platform-cache/src/interceptors/PlatformCacheInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/interceptors/PlatformCacheInterceptor.ts#L0-L0).

## Overview

```ts
class PlatformCacheInterceptor implements InterceptorMethods {
    protected cache: PlatformCache;
    protected refreshService: PlatformCacheRefreshService;
    protected prefix: string;
    protected blacklist: string[];
    intercept(context: InterceptorContext<any, PlatformCacheOptions>, next: InterceptorNext): unknown;
    cacheMethod(context: InterceptorContext<any, PlatformCacheOptions>, next: InterceptorNext): Promise<any>;
    cacheResponse(interceptorContext: InterceptorContext<any, PlatformCacheOptions>, next: InterceptorNext): Promise<any>;
    protected getMethod($ctx?: Context): string | undefined;
    protected noCache($ctx?: Context): boolean;
    protected getArgs(context: InterceptorContext<unknown, PlatformCacheOptions>): unknown[];
    protected getOptions(interceptorContext: InterceptorContext<any, PlatformCacheOptions>, defaultByPass?: PlatformCacheOptions["byPass"]): {
        key: string;
        refreshThreshold: number | undefined;
        ttl: import("../services/PlatformCache.js").Ttl | undefined;
        type: any;
        args: unknown[];
        collectionType: any;
        keyArgs: string;
        canCache: ((item: any) => boolean) | undefined;
        $ctx: Context;
        byPass: false | "no-cache" | ((args: any[], $ctx?: BaseContext) => boolean);
    };
    protected getContextFromArgs(args: unknown[]): Context | undefined;
    protected shouldByPassCache(byPass: PlatformCacheOptions["byPass"], args: unknown[], $ctx?: Context): boolean;
    protected sendResponse(cachedObject: PlatformCachedObject): any;
}
```

## protected cache

```ts
protected cache: PlatformCache;
```

## protected refreshService

```ts
protected refreshService: PlatformCacheRefreshService;
```

## protected prefix

```ts
protected prefix: string;
```

## protected blacklist

```ts
protected blacklist: string[];
```

## intercept

```ts
intercept(context: InterceptorContext<any, PlatformCacheOptions>, next: InterceptorNext): unknown;
```

## cacheMethod

```ts
cacheMethod(context: InterceptorContext<any, PlatformCacheOptions>, next: InterceptorNext): Promise<any>;
```

## cacheResponse

```ts
cacheResponse(interceptorContext: InterceptorContext<any, PlatformCacheOptions>, next: InterceptorNext): Promise<any>;
```

## protected getMethod

```ts
protected getMethod($ctx?: Context): string | undefined;
```

## protected noCache

```ts
protected noCache($ctx?: Context): boolean;
```

## protected getArgs

```ts
protected getArgs(context: InterceptorContext<unknown, PlatformCacheOptions>): unknown[];
```

## protected getOptions

```ts
protected getOptions(interceptorContext: InterceptorContext<any, PlatformCacheOptions>, defaultByPass?: PlatformCacheOptions["byPass"]): {
     key: string;
     refreshThreshold: number | undefined;
     ttl: import("../services/PlatformCache.js").Ttl | undefined;
     type: any;
     args: unknown[];
     collectionType: any;
     keyArgs: string;
     canCache: ((item: any) => boolean) | undefined;
     $ctx: Context;
     byPass: false | "no-cache" | ((args: any[], $ctx?: BaseContext) => boolean);
 };
```

## protected getContextFromArgs

```ts
protected getContextFromArgs(args: unknown[]): Context | undefined;
```

## protected shouldByPassCache

```ts
protected shouldByPassCache(byPass: PlatformCacheOptions["byPass"], args: unknown[], $ctx?: Context): boolean;
```

## protected sendResponse

```ts
protected sendResponse(cachedObject: PlatformCachedObject): any;
```
