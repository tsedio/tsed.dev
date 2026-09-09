---
title: isBooleanOrBooleanClass from @tsed/core
description: api documentation of isBooleanOrBooleanClass from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isBooleanOrBooleanClass function
---
# isBooleanOrBooleanClass - @tsed/core

## Usage

```typescript
import { isBooleanOrBooleanClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isBoolean.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isBoolean.ts#L0-L0).

## Overview

```ts
function isBooleanOrBooleanClass(target: any): target is boolean;
```

<!-- Description -->

## Description

Checks if a value is a boolean primitive, Boolean object, or the Boolean constructor.
