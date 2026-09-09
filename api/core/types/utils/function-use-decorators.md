---
url: /api/core/types/utils/function-use-decorators.md
description: api documentation of useDecorators from @tsed/core
---

## Usage

```typescript
import { useDecorators } from "@tsed/core";
```

> See [/packages/core/src/utils/useDecorators.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/useDecorators.ts#L0-L0).

## Overview

```ts
function useDecorators(...decorators: AnyDecorator[]): any;
```

## Description

Combines multiple decorators into a single decorator function.
