---
url: /api/di/types/common/decorators/decorator-scope.md
description: api documentation of Scope from @tsed/di
---

## Usage

```typescript
import { Scope } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/scope.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/scope.ts#L0-L0).

## Overview

```ts
function Scope(scope?: "request" | "singleton" | ProviderScope): Function;
```

* **scope** (`"request"` | `"singleton"` | `ProviderScope`): Optional. The provider scope to set (default: REQUEST)

## Description

Define the lifecycle scope of a provider.

Controls when and how provider instances are created and shared.
Can be combined with `@Injectable()`, `@Service()`, or other provider decorators.

### Scopes

* `SINGLETON`: One instance shared across the application (default)
* `REQUEST`: New instance per request/context
* `INSTANCE`: New instance on every injection

### Usage

```typescript
import {Injectable, Scope, ProviderScope} from "@tsed/di";

@Injectable()
@Scope(ProviderScope.REQUEST)
export class RequestScopedService {
  // New instance created for each request
}

@Injectable()
@Scope("singleton")
export class SingletonService {
  // Same instance shared across the app
}
```
