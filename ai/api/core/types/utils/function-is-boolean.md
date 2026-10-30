---
title: isBoolean from @tsed/core
description: api documentation of isBoolean from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isBoolean function
---
# isBoolean - @tsed/core

## Usage

```typescript
import { isBoolean } from "@tsed/core";
```

> See [/packages/core/src/utils/isBoolean.ts](https://github.com/tsedio/tsed/blob/v8.44.13/packages/core/src/utils/isBoolean.ts#L0-L0).

## Overview

```ts
function isBoolean(target: any): target is boolean;
```

<!-- Description -->

## Description

Checks if a value is a boolean primitive.

The `Boolean` constructor and boxed `new Boolean()` values are not accepted, like
{@link isString} and {@link isNumber}. Use {@link isBooleanOrBooleanClass} to accept them.
