---
url: /api/di/types/common/decorators/type-transform-injected-provider-cb.md
description: api documentation of TransformInjectedProviderCB from @tsed/di
---

## Usage

```typescript
import { TransformInjectedProviderCB } from "@tsed/di/src/common/decorators/inject";
```

> See [/packages/di/src/common/decorators/inject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/inject.ts#L0-L0).

## Overview

```ts
type TransformInjectedProviderCB<T, Klass = any> = (instance: T, { target, propertyKey }: {
    self: Klass;
    target: Type<Klass>;
    propertyKey: symbol | string;
}) => unknown;
```

## self

```ts
self: Klass;
```

## target

```ts
target: Type<Klass>;
```

## propertyKey

```ts
propertyKey: symbol | string;
```
