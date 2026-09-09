---
title: isArrowFn from @tsed/core
description: api documentation of isArrowFn from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isArrowFn function
---
# isArrowFn - @tsed/core

## Usage

```typescript
import { isArrowFn } from "@tsed/core";
```

> See [/packages/core/src/utils/isArrowFn.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isArrowFn.ts#L0-L0).

## Overview

```ts
function isArrowFn(target: any): target is Function;
```

<!-- Description -->

## Description

Checks if a value is an arrow function by verifying it has no prototype property.
