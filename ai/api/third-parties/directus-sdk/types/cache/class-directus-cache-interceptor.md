---
title: DirectusCacheInterceptor from @tsed/directus-sdk
description: api documentation of DirectusCacheInterceptor from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation DirectusCacheInterceptor class
---
# DirectusCacheInterceptor - @tsed/directus-sdk

## Usage

```typescript
import { DirectusCacheInterceptor } from "@tsed/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor";
```

> See [/packages/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/cache/DirectusCacheInterceptor.ts#L0-L0).

## Overview

```ts
class DirectusCacheInterceptor implements InterceptorMethods {
    intercept(context: InterceptorContext<unknown, DirectusCacheOptions>): Promise<any>;
}
```

<!-- Description -->

## Description

Interceptor that provides caching functionality using Directus cache infrastructure.

This interceptor wraps method calls to cache their results based on method arguments.
It integrates with Directus's built-in caching system and supports both system cache
and regular cache.

Features:

-   Automatic cache key generation based on class name, method name, and arguments
-   Configurable TTL (time to live) for cached values
-   Custom key generators for complex caching strategies
-   Support for both system cache and regular cache
-   Proper handling of falsy values (null, false, 0, empty string)

### Direct usage with bindIntercept

```ts
import {DirectusCacheInterceptor, useDirectusCache} from "@tsed/directus-sdk";
import {injectable} from "@tsed/di";

export class MyService {
  search(query: string) {
    // Expensive operation
    return this.performSearch(query);
  }
}

// Apply cache programmatically
injectable(MyService);
useDirectusCache(MyService, "search", { ttl: 60000 });
```

This interceptor is typically used via the `@Cache` decorator rather than directly.
The cache key format is: `{namespace}:{keyGenerator(...args)}`
where namespace defaults to `snake_case_class_name:methodName`

<!-- Members -->

## intercept

```ts
intercept(context: InterceptorContext<unknown, DirectusCacheOptions>): Promise<any>;
```

-   **context** (`InterceptorContext<unknown`): - The interceptor context containing method information and options

Intercepts a method call to provide caching functionality.

The interception flow:

1.  Extract cache options from the context
2.  Generate a cache key based on class name, method name, and arguments
3.  Check if a cached value exists
4.  If cached, return the cached value (skipping method execution)
5.  If not cached, execute the method
6.  Store the result in cache with the specified TTL
7.  Return the result

### Cache key generation

```ts
// For class MyService with method search("query")
// Default namespace: "my_service:search"
// Full cache key: "my_service:search:["query"]"
```

-   The cache check uses strict inequality (`!== undefined`) to allow caching falsy values
-   Cache keys are automatically namespaced to avoid collisions between different methods
-   The system cache is used by default, which persists across requests
