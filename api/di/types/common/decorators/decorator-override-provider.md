---
url: /api/di/types/common/decorators/decorator-override-provider.md
description: api documentation of OverrideProvider from @tsed/di
---

## Usage

```typescript
import { OverrideProvider } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/overrideProvider.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/overrideProvider.ts#L0-L0).

## Overview

```ts
function OverrideProvider(originalProvider: Type<any>): Function;
```

* **originalProvider** (`Type<any>`): The provider class to override

## Description

Override an existing provider registration with a new implementation.

Replaces the implementation class of a registered provider while keeping the same token.
Useful for testing, plugin systems, or providing alternative implementations.

### Usage

```typescript
import {Injectable, OverrideProvider} from "@tsed/di";

@Injectable()
class OriginalService {
  getData() {
    return "original";
  }
}

// Override with new implementation
@OverrideProvider(OriginalService)
class MockService {
  getData() {
    return "mocked";
  }
}

// Injected instances will now use MockService
@Injectable()
class UserService {
  constructor(private service: OriginalService) {
    console.log(this.service.getData()); // "mocked"
  }
}
```
