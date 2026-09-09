---
url: /api/core/types/types/type-decorator-method-parameters.md
description: api documentation of DecoratorMethodParameters from @tsed/core
---

## Usage

```typescript
import { DecoratorMethodParameters } from "@tsed/core/src/types/DecoratorParameters";
```

> See [/packages/core/src/types/DecoratorParameters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/DecoratorParameters.ts#L0-L0).

## Overview

```ts
type DecoratorMethodParameters = [any, string | symbol, PropertyDescriptor];
```

## Description

Specialized variant for method decorators where the third element
is always a `PropertyDescriptor`.
