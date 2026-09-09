---
url: /api/third-parties/directus-sdk/types/fn/function-wrap-operation.md
description: api documentation of wrapOperation from @tsed/directus-sdk
---

## Usage

```typescript
import { wrapOperation } from "@tsed/third-parties/directus-sdk/src/fn/wrapOperation";
```

> See [/packages/third-parties/directus-sdk/src/fn/wrapOperation.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/directus-sdk/src/fn/wrapOperation.ts#L0-L0).

## Overview

```ts
function wrapOperation<Options = Record<string, unknown>>(callback: (options: Options, context: OperationContext) => unknown | Promise<unknown> | void): (options: Options, context: OperationContext) => Promise<unknown>;
```

* **callback** (`(options: Options`): - The operation handler function that receives options and context

## Description

Wraps an operation handler to provide Ts.ED dependency injection and error handling.

This function is internally used by `defineOperationApi` to:

* Initialize the Ts.ED DI container for each operation execution
* Enable service injection via `inject()` within the operation handler
* Provide automatic error handling and logging
* Set up the Directus context in `DirectusContextService`
* Create an isolated DI context for each operation run

Each operation execution runs within its own DI context with platform set to
`DIRECTUS_OPERATION`, ensuring proper isolation between different operation runs.

This is typically used internally by `defineOperationApi`. You generally don't need
to call this directly unless you're building custom operation wrappers.

Error handling:

* Errors are caught and logged with structured information
* Error details include name, message, description, and stack trace
* Logger is automatically flushed after error logging
* The error is not re-thrown, allowing the flow to continue
