---
url: /api/di/types/common/fn/function-locals-container.md
description: api documentation of localsContainer from @tsed/di
---

## Usage

```typescript
import { localsContainer } from "@tsed/di";
```

> See [/packages/di/src/common/fn/localsContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/fn/localsContainer.ts#L0-L0).

## Overview

```ts
function localsContainer({ providers, rebuild }?: {
    providers?: UseImportTokenProviderOpts[];
    rebuild?: boolean;
}): LocalsContainer;
```

## Description

Get or create the current locals container for request-scoped providers.

Returns the global locals container used for storing request-scoped provider instances.
Can optionally create a new container with custom providers.

### Usage

```typescript
import {localsContainer} from "@tsed/di";

// Get current locals
const locals = localsContainer();

// Create with custom providers
const locals = localsContainer({
  providers: [{token: MyService, use: mockInstance}],
  rebuild: true
});
```

## providers

```ts
providers?: UseImportTokenProviderOpts[];
```

## rebuild

```ts
rebuild?: boolean;
```
