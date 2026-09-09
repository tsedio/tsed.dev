---
title: primitiveOf from @tsed/core
description: api documentation of primitiveOf from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation primitiveOf function
---
# primitiveOf - @tsed/core

## Usage

```typescript
import { primitiveOf } from "@tsed/core";
```

> See [/packages/core/src/utils/primitiveOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/primitiveOf.ts#L0-L0).

## Overview

```ts
function primitiveOf(target: any): "string" | "number" | "boolean" | "any";
```

<!-- Description -->

## Description

Determines the primitive type name for a given target value or class.
