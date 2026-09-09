---
title: useDirectusCache from @tsed/directus-sdk
description: api documentation of useDirectusCache from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation useDirectusCache function
---
# useDirectusCache - @tsed/directus-sdk

## Usage

```typescript
import { useDirectusCache } from "@tsed/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor";
```

> See [/packages/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor.ts#L0-L0).

## Overview

```ts
function useDirectusCache<K, Props = keyof K>(token: Type<K>, propertyKey: Props, opts: DirectusCacheOptions): void;
```

-   **token** (`Type<K>`): - The class constructor to apply caching to

-   **propertyKey** (`Props`): - The name of the method to cache

-   **opts** (`DirectusCacheOptions`): - Cache configuration options

<!-- Description -->

## Description

Programmatically applies cache interception to a method using Directus cache infrastructure.

This function allows you to add caching to a method after the class is defined,
which is useful when you can't use decorators or need dynamic cache configuration.

```ts
import {injectable} from "@tsed/di";
import {useDirectusCache} from "@tsed/directus-sdk";

export class JiraIssueClient {
  search(query: string) {
    // Expensive search operation
    return this.performSearch(query);
  }
}

injectable(JiraIssueClient)

// Apply cache after class definition
useDirectusCache(JiraIssueClient, "search", { ttl: 900000 });
```

### With custom options

```ts

useDirectusCache(MyService, "fetchData", {
  ttl: 60000,
  keyGenerator: (id: string) => `data:${id}`,
  namespace: "my_service:data",
  useSystemCache: false
});
```

### Applying cache to multiple methods

```ts
import {injectable} from "@tsed/di";
import {useDirectusCache} from "@tsed/directus-sdk";

export class ApiClient {
  getUser(id: string) { }
  getPosts() { }
}
injectable(ApiClient);

useDirectusCache(ApiClient, "getUser", { ttl: 300000 });
useDirectusCache(ApiClient, "getPosts", { ttl: 60000 });
```

-   Must be called after the class is marked as `@Injectable()` or `injectable()`
-   The class must be registered in the DI container
-   Prefer using the `@Cache` decorator when possible for better readability
