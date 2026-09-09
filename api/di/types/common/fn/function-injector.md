---
url: /api/di/types/common/fn/function-injector.md
description: api documentation of injector from @tsed/di
---

## Usage

```typescript
import { injector } from "@tsed/di";
```

> See [/packages/di/src/common/fn/injector.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/injector.ts#L0-L0).

## Overview

```ts
function injector(): InjectorService;
```

## Description

Get the global injector service instance.

Returns the singleton instance of `InjectorService` managing all registered providers.
Use this to access the DI container programmatically.

### Usage

```typescript
import {injector, Injectable} from "@tsed/di";

@Injectable()
class MyService {
  injector = injector();

  getService() {
    return injector().get(OtherService);
  }
}
```
