---
url: /api/core/types/types/type-value-of.md
description: api documentation of ValueOf from @tsed/core
---

## Usage

```typescript
import { ValueOf } from "@tsed/core/src/types/ValueOf";
```

> See [/packages/core/src/types/ValueOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/ValueOf.ts#L0-L0).

## Overview

```ts
type ValueOf<T> = T[keyof T];
```

## Description

Type utilitaire qui produit l'union de toutes les valeurs d'un type objet `T`.

```ts
type T = {a: 1; b: 2};
type V = ValueOf<T>; // 1 | 2
```
