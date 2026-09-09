---
url: /api/platform/platform-exceptions/types/errors/class-resource-not-found.md
description: api documentation of ResourceNotFound from @tsed/platform-exceptions
---

## Usage

```typescript
import { ResourceNotFound } from "@tsed/platform-exceptions";
```

> See [/packages/platform/platform-exceptions/src/errors/ResourceNotFound.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-exceptions/src/errors/ResourceNotFound.ts#L0-L0).

## Overview

```ts
class ResourceNotFound extends NotFound {
    readonly url: string;
    constructor(url: string);
}
```

## readonly url

```ts
readonly url: string;
```
