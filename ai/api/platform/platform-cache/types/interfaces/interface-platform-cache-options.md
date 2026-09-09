---
title: PlatformCacheOptions from @tsed/platform-cache
description: api documentation of PlatformCacheOptions from @tsed/platform-cache
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformCacheOptions interface
---
# PlatformCacheOptions - @tsed/platform-cache

## Usage

```typescript
import { PlatformCacheOptions } from "@tsed/platform-cache";
```

> See [/packages/platform/platform-cache/src/interfaces/PlatformCacheOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-cache/src/interfaces/PlatformCacheOptions.ts#L0-L0).

## Overview

```ts
interface PlatformCacheOptions extends MetadataTypes {
    ttl?: Ttl;
    prefix?: string;
    key?: string | ((args: any[], ctx?: BaseContext) => string);
    refreshThreshold?: number;
    canCache?: ((item: any) => boolean) | "no-nullish";
    byPass?: false | "no-cache" | ((args: any[], $ctx?: BaseContext) => boolean);
}
```

<!-- Members -->

## ttl

```ts
ttl?: Ttl;
```

key expiration ttl in seconds.

## prefix

```ts
prefix?: string;
```

By default, the key is generated from the method name and the arguments passed to the method.

## key: string |

```ts
key?: string | ((args: any[], ctx?: BaseContext) => string);
```

Algorithm used to generate the key. By default, the key is generated from the method name and the arguments passed to the method.

## refreshThreshold

```ts
refreshThreshold?: number;
```

threshold to refresh the cache.

## canCache:

```ts
canCache?: ((item: any) => boolean) | "no-nullish";
```

The function determine if the result must be cached or not.

## byPass: false | "no-cache" |

```ts
byPass?: false | "no-cache" | ((args: any[], $ctx?: BaseContext) => boolean);
```

Configure the bypass cache strategy.

-   `false` (default for services) never bypasses the cache.
-   `"no-cache"` (default for HTTP endpoints) bypasses when the `Cache-Control: no-cache` header is present.
-   Provide a function to decide dynamically based on the current call arguments/context.
