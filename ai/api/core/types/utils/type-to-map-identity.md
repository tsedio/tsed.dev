---
title: ToMapIdentity from @tsed/core
description: api documentation of ToMapIdentity from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation ToMapIdentity type
---
# ToMapIdentity - @tsed/core

## Usage

```typescript
import { ToMapIdentity } from "@tsed/core/src/utils/toMap";
```

> See [/packages/core/src/utils/toMap.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/toMap.ts#L0-L0).

## Overview

```ts
type ToMapIdentity<V> = string | ToMapIdentityCB<V>;
```

<!-- Description -->

## Description

Identity type for map key generation, either a property name or callback function.
