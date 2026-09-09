---
url: /api/core/types/utils/function-use-method-decorators.md
description: api documentation of useMethodDecorators from @tsed/core
---

## Usage

```typescript
import { useMethodDecorators } from "@tsed/core";
```

> See [/packages/core/src/utils/useMethodDecorators.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/useMethodDecorators.ts#L0-L0).

## Overview

```ts
function useMethodDecorators(...decorators: AnyDecorator[]): (target: any, propertyKey: string | symbol) => void;
```

## Description

Combines multiple method decorators into a single decorator with proper descriptor handling.
