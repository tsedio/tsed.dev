---
title: PlatformHandlerType from @tsed/platform-router
description: api documentation of PlatformHandlerType from @tsed/platform-router
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformHandlerType enum
---
# PlatformHandlerType - @tsed/platform-router

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

<!-- Members -->

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

## ERR_MIDDLEWARE = "err

```ts
ERR_MIDDLEWARE = "err:middleware",
```

## CTX_FN

```ts
CTX_FN = "context",
```

## RESPONSE_FN

```ts
RESPONSE_FN = "response",
```

## RAW_FN = "raw

```ts
RAW_FN = "raw:middleware",
```

## RAW_ERR_FN = "raw:err

```ts
RAW_ERR_FN = "raw:err:middleware"
```
