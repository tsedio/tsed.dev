---
url: >-
  /api/platform/platform-accept-mimes/types/middlewares/class-platform-accept-mimes-middleware.md
description: >-
  api documentation of PlatformAcceptMimesMiddleware from
  @tsed/platform-accept-mimes
---

## Usage

```typescript
import { PlatformAcceptMimesMiddleware } from "@tsed/platform-accept-mimes";
```

> See [/packages/platform/platform-accept-mimes/src/middlewares/PlatformAcceptMimesMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-accept-mimes/src/middlewares/PlatformAcceptMimesMiddleware.ts#L0-L0).

## Overview

```ts
class PlatformAcceptMimesMiddleware implements MiddlewareMethods {
    protected acceptMimes: string[];
    $alterEndpointHandlers(handlers: AlterEndpointHandlersArg, operationRoute: JsonOperationRoute): {
        before: any[];
        endpoint: import("@tsed/schema").JsonMethodStore;
        after: (import("@tsed/core").Type<any> | Function)[];
    };
    use(): void;
}
```

## protected acceptMimes

```ts
protected acceptMimes: string[];
```

## $alterEndpointHandlers

```ts
$alterEndpointHandlers(handlers: AlterEndpointHandlersArg, operationRoute: JsonOperationRoute): {
     before: any[];
     endpoint: import("@tsed/schema").JsonMethodStore;
     after: (import("@tsed/core").Type<any> | Function)[];
 };
```

## use

```ts
use(): void;
```
