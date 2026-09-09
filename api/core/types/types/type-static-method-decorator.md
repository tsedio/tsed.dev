---
url: /api/core/types/types/type-static-method-decorator.md
description: api documentation of StaticMethodDecorator from @tsed/core
---

## Usage

```typescript
import { StaticMethodDecorator } from "@tsed/core/src/types/DecoratorParameters";
```

> See [/packages/core/src/types/DecoratorParameters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/DecoratorParameters.ts#L0-L0).

## Overview

```ts
type StaticMethodDecorator = <TFunction extends Function, T>(target: TFunction, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
```
