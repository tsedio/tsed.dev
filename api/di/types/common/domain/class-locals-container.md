---
url: /api/di/types/common/domain/class-locals-container.md
description: api documentation of LocalsContainer from @tsed/di
---

## Usage

```typescript
import { LocalsContainer } from "@tsed/di";
```

> See [/packages/di/src/common/domain/LocalsContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/domain/LocalsContainer.ts#L0-L0).

## Overview

```ts
class LocalsContainer extends Map<TokenProvider, any> {
    readonly hooks: Hooks;
    destroy(): Promise<void>;
}
```

## Description

Container for request-scoped and instance-scoped provider instances.

Stores instances created within a specific execution context (like an HTTP request).
Manages lifecycle hooks and destruction of scoped instances when the context ends.

### Usage

```typescript
import {LocalsContainer} from "@tsed/di";

const locals = new LocalsContainer();
locals.set(MyService, serviceInstance);

const instance = locals.get(MyService);

await locals.destroy(); // Cleanup when context ends
```

## readonly hooks

```ts
readonly hooks: Hooks;
```

## destroy

```ts
destroy(): Promise<void>;
```
