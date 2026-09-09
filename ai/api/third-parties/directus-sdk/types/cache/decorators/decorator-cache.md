---
title: Cache from @tsed/directus-sdk
description: api documentation of Cache from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation Cache decorator
---
# Cache - @tsed/directus-sdk

## Usage

```typescript
import { Cache } from "@tsed/third-parties/directus-sdk/src/cache/decorators/cache";
```

> See [/packages/third-parties/directus-sdk/src/cache/decorators/cache.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/cache/decorators/cache.ts#L0-L0).

## Overview

```ts
function Cache(options: DirectusCacheOptions): any;
```

-   **options** (`DirectusCacheOptions`): - Cache configuration options

-   **options.ttl** (\`\`): - Time to live in milliseconds (default: 900000ms = 15 minutes)

-   **options.keyGenerator** (\`\`): - Custom function to generate cache keys from method arguments

-   **options.namespace** (\`\`): - Custom namespace for cache keys (default: className:methodName)

-   **options.useSystemCache** (\`\`): - Whether to use system cache (true) or regular cache (false). Default: true

<!-- Description -->

## Description

Decorator to cache method results using Directus cache system.

This decorator uses the Directus cache infrastructure (system cache by default) to store
method results. Cached values are retrieved on subsequent calls with the same arguments,
avoiding redundant computations or API calls.

### Basic usage

```ts
import {Injectable} from "@tsed/di";
import {Cache} from "@tsed/directus-sdk";

@Injectable()
export class JiraIssueClient {
  // Cache search results for 15 minutes (default TTL)
  @Cache({ ttl: 900000 })
  search(query: string) {
    // Expensive API call
    return this.fetchFromJira(query);
  }

  // Custom cache key generator
  @Cache({
    ttl: 60000,
    keyGenerator: (userId: string) => `user:${userId}`
  })
  getUserById(userId: string) {
    return this.fetchUser(userId);
  }

  // Use regular cache instead of system cache
  @Cache({
    ttl: 300000,
    useSystemCache: false,
    namespace: "custom:namespace"
  })
  getCustomData() {
    return this.fetchCustomData();
  }
}
```
