---
title: isNumberOrNumberClass from @tsed/core
description: api documentation of isNumberOrNumberClass from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isNumberOrNumberClass function
---
# isNumberOrNumberClass - @tsed/core

## Usage

```typescript
import { isNumberOrNumberClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isNumber.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isNumber.ts#L0-L0).

## Overview

```ts
function isNumberOrNumberClass(target: any): target is number;
```

<!-- Description -->

## Description

Checks if a value is a number primitive, Number object, or the Number constructor.
