---
url: /api/di/types/common/decorators/interface-bind-injectable-property-opts.md
description: api documentation of BindInjectablePropertyOpts from @tsed/di
---

## Usage

```typescript
import { BindInjectablePropertyOpts } from "@tsed/di";
```

> See [/packages/di/src/common/decorators/inject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/di/src/common/decorators/inject.ts#L0-L0).

## Overview

```ts
interface BindInjectablePropertyOpts<T = any> {
    token?: TokenProvider;
    useOpts?: Record<string, unknown>;
    transform?: TransformInjectedProviderCB<T>;
}
```

## token

```ts
token?: TokenProvider;
```

## useOpts

```ts
useOpts?: Record<string, unknown>;
```

## transform

```ts
transform?: TransformInjectedProviderCB<T>;
```
