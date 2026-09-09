---
url: /api/core/types/utils/function-decorator-type-of.md
description: api documentation of decoratorTypeOf from @tsed/core
---

## Usage

```typescript
import { decoratorTypeOf } from "@tsed/core";
```

> See [/packages/core/src/utils/decoratorTypeOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/decoratorTypeOf.ts#L0-L0).

## Overview

```ts
function decoratorTypeOf(args: any[]): DecoratorTypes;
```

## Description

Determines the decorator type from decorator parameters.

Analyzes the target, propertyKey, and descriptor to classify the decorator as
class, method, property, parameter, or their static variants.
