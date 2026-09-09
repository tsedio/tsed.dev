---
title: isArrayOrArrayClass from @tsed/core
description: api documentation of isArrayOrArrayClass from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isArrayOrArrayClass function
---
# isArrayOrArrayClass - @tsed/core

## Usage

```typescript
import { isArrayOrArrayClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isArray.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isArray.ts#L0-L0).

## Overview

```ts
function isArrayOrArrayClass<T = any>(target: unknown): target is T[];
```

<!-- Description -->

## Description

Checks if a value is the Array constructor or an array instance.
