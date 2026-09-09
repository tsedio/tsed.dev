---
url: /api/di/types/common/domain/interface-controller-middlewares.md
description: api documentation of ControllerMiddlewares from @tsed/di
---

## Usage

```typescript
import { ControllerMiddlewares } from "@tsed/di";
```

> See [/packages/di/src/common/domain/Provider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/Provider.ts#L0-L0).

## Overview

```ts
interface ControllerMiddlewares {
    useBefore: TokenProvider[];
    use: TokenProvider[];
    useAfter: TokenProvider[];
}
```

## Description

Middleware configuration for a controller.

Defines middleware tokens to be applied at different stages of request processing.

## useBefore

```ts
useBefore: TokenProvider[];
```

## use

```ts
use: TokenProvider[];
```

## useAfter

```ts
useAfter: TokenProvider[];
```
