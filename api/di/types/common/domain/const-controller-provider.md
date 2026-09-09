---
url: /api/di/types/common/domain/const-controller-provider.md
description: api documentation of ControllerProvider from @tsed/di
---

## Usage

```typescript
import { ControllerProvider } from "@tsed/di";
```

> See [/packages/di/src/common/domain/ControllerProvider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/ControllerProvider.ts#L0-L0).

## Overview

```ts
const ControllerProvider: typeof Provider;
```

## Description

Specialized provider for HTTP controllers.

Extends the base `Provider` class with controller-specific metadata like middleware configuration
and routing information. Used internally to manage HTTP route controllers in the DI system.

### Usage

```typescript
import {ControllerProvider} from "@tsed/di";

const provider = new ControllerProvider(MyController);
provider.middlewares = {
  useBefore: [AuthMiddleware],
  use: [ValidationMiddleware],
  useAfter: [LoggingMiddleware]
};
```
