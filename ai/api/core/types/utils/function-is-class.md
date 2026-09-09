---
title: isClass from @tsed/core
description: api documentation of isClass from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isClass function
---
# isClass - @tsed/core

## Usage

```typescript
import { isClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isClass.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isClass.ts#L0-L0).

## Overview

```ts
function isClass(target: any): boolean;
```

<!-- Description -->

## Description

Determines whether a given value represents a class (constructor function).

This helper filters out common non-class values such as primitives, symbols,
plain objects, dates, promises, arrays, buffers, and arrow functions.
