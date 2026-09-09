---
title: wrapEndpoint from @tsed/directus-sdk
description: api documentation of wrapEndpoint from @tsed/directus-sdk
meta:
 - name: keywords
   description: api typescript node.js documentation wrapEndpoint function
---
# wrapEndpoint - @tsed/directus-sdk

## Usage

```typescript
import { wrapEndpoint } from "@tsed/third-parties/directus-sdk/src/fn/wrapEndpoint";
```

> See [/packages/third-parties/directus-sdk/src/fn/wrapEndpoint.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/fn/wrapEndpoint.ts#L0-L0).

## Overview

```ts
function wrapEndpoint(callback: (router: Router, context: EndpointExtensionContext) => void): (router: Router, context: EndpointExtensionContext) => void;
```

-   **callback** (`(router: Router`): - The endpoint handler function that receives router and context

<!-- Description -->

## Description

Wraps an endpoint handler to provide Ts.ED dependency injection and error handling.

This function is internally used by `defineEndpoint` to:

-   Initialize the Ts.ED DI container for each request
-   Wrap all Express router methods (GET, POST, PUT, DELETE, etc.)
-   Provide automatic error handling with proper HTTP responses
-   Attach Directus logger to the DI context
-   Log errors with structured error information

Each route handler executes within its own DI context, allowing proper isolation
and service injection via `inject()`.

This is typically used internally by `defineEndpoint`. You generally don't need to
call this directly unless you're building custom endpoint wrappers.

Error handling:

-   Errors are caught and returned as JSON responses
-   Status code is extracted from `error.status` (defaults to 500)
-   Error message is extracted from `error.error_message` or `error.message`
-   Additional errors array is included if present in `error.errors`
-   All errors are logged with structured information (name, message, description, stack)
