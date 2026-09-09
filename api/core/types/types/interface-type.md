---
url: /api/core/types/types/interface-type.md
description: api documentation of Type from @tsed/core
---

## Usage

```typescript
import { Type } from "@tsed/core";
```

> See [/packages/core/src/types/Type.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Type.ts#L0-L0).

## Overview

```ts
interface Type<T = any> extends Function {
    new (...args: any[]): T;
}

export const Type: FunctionConstructor;
```

## Description

Represents a class constructor `new (...args) => T`.

In Ts.ED, `Type<T>` is used to type class references (controllers, services, models, etc.) where a constructor is expected.

## new

```ts
new (...args: any[]): T;
```
