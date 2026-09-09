---
title: ToMapIdentityCB from @tsed/core
description: api documentation of ToMapIdentityCB from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation ToMapIdentityCB type
---
# ToMapIdentityCB - @tsed/core

## Usage

```typescript
import { ToMapIdentityCB } from "@tsed/core/src/utils/toMap";
```

> See [/packages/core/src/utils/toMap.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/toMap.ts#L0-L0).

## Overview

```ts
type ToMapIdentityCB<V> = (item: V, index: string | number) => string | string[];
```

<!-- Description -->

## Description

Callback function type for generating map keys from items.
