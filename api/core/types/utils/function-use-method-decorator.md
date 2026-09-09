---
url: /api/core/types/utils/function-use-method-decorator.md
description: api documentation of useMethodDecorator from @tsed/core
---

## Usage

```typescript
import { useMethodDecorator } from "@tsed/core";
```

> See [/packages/core/src/utils/useMethodDecorators.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/useMethodDecorators.ts#L0-L0).

## Overview

```ts
function useMethodDecorator(decorator: AnyDecorator): (target: any, propertyKey: string | symbol) => any;
```

## Description

Wraps a decorator to ensure it receives the proper method descriptor.
