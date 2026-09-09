---
url: /api/platform/platform-exceptions/types/services/class-platform-exceptions.md
description: api documentation of PlatformExceptions from @tsed/platform-exceptions
---

## Usage

```typescript
import { PlatformExceptions } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/services/PlatformExceptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/services/PlatformExceptions.ts#L0-L0).

## Overview

```ts
class PlatformExceptions {
    types: Map<ExceptionFilterKey, TokenProvider>;
    constructor();
    catch(error: unknown, ctx: DIContext): any;
    resourceNotFound(ctx: DIContext): any;
    protected resolve(error: any, ctx: DIContext): any;
}
```

## Description

Catch all errors and return the json error with the right status code when it's possible.

## types

```ts
types: Map<ExceptionFilterKey, TokenProvider>;
```

## catch

```ts
catch(error: unknown, ctx: DIContext): any;
```

## resourceNotFound

```ts
resourceNotFound(ctx: DIContext): any;
```

## protected resolve

```ts
protected resolve(error: any, ctx: DIContext): any;
```
