---
url: /api/platform/platform-router/types/domain/enum-platform-handler-type.md
description: api documentation of PlatformHandlerType from @tsed/platform-router
---

## Usage

```typescript
import { PlatformHandlerType } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformHandlerType.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformHandlerType.ts#L0-L0).

## Overview

```ts
enum PlatformHandlerType {
    CUSTOM = "custom",
    ENDPOINT = "endpoint",
    MIDDLEWARE = "middleware",
    ERR_MIDDLEWARE = "err:middleware",
    CTX_FN = "context",
    RESPONSE_FN = "response",
    RAW_FN = "raw:middleware",
    RAW_ERR_FN = "raw:err:middleware"
}
```

## CUSTOM

```ts
CUSTOM = "custom",
```

## ENDPOINT

```ts
ENDPOINT = "endpoint",
```

## MIDDLEWARE

```ts
MIDDLEWARE = "middleware",
```

## ERR\_MIDDLEWARE = "err

```ts
ERR_MIDDLEWARE = "err:middleware",
```

## CTX\_FN

```ts
CTX_FN = "context",
```

## RESPONSE\_FN

```ts
RESPONSE_FN = "response",
```

## RAW\_FN = "raw

```ts
RAW_FN = "raw:middleware",
```

## RAW\_ERR\_FN = "raw:err

```ts
RAW_ERR_FN = "raw:err:middleware"
```
