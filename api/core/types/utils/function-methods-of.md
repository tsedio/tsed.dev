---
url: /api/core/types/utils/function-methods-of.md
description: api documentation of methodsOf from @tsed/core
---

## Usage

```typescript
import { methodsOf } from "@tsed/core";
```

> See [/packages/core/src/utils/methodsOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/methodsOf.ts#L0-L0).

## Overview

```ts
function methodsOf(target: any): {
    target: Type;
    propertyKey: string;
}[];
```

## Description

Returns all methods for a given class by traversing its prototype chain.

## target

```ts
target: Type;
```

## propertyKey

```ts
propertyKey: string;
```
