---
title: ProviderScope from @tsed/di
description: api documentation of ProviderScope from @tsed/di
meta:
 - name: keywords
   description: api typescript node.js documentation ProviderScope enum
---
# ProviderScope - @tsed/di

## Usage

```typescript
import { ProviderScope } from "@tsed/di";
```

> See [/packages/di/src/common/domain/ProviderScope.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/ProviderScope.ts#L0-L0).

## Overview

```ts
enum ProviderScope {
    SINGLETON = "singleton",
    REQUEST = "request",
    INSTANCE = "instance"
}
```

<!-- Description -->

## Description

Enumeration defining the lifecycle scopes for provider instances.

Determines when and how provider instances are created and shared across the application.

### Scopes

-   `SINGLETON`: One instance shared across the entire application (default)
-   `REQUEST`: New instance created for each request/context
-   `INSTANCE`: New instance created on every injection

### Usage

```typescript
import {Injectable, Scope, ProviderScope} from "@tsed/di";

@Injectable()
@Scope(ProviderScope.REQUEST)
class RequestScopedService {
  // New instance per request
}
```

<!-- Members -->

## SINGLETON

```ts
SINGLETON = "singleton",
```

## REQUEST

```ts
REQUEST = "request",
```

## INSTANCE

```ts
INSTANCE = "instance"
```
