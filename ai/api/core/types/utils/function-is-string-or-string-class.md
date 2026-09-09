---
title: isStringOrStringClass from @tsed/core
description: api documentation of isStringOrStringClass from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isStringOrStringClass function
---
# isStringOrStringClass - @tsed/core

## Usage

```typescript
import { isStringOrStringClass } from "@tsed/core";
```

> See [/packages/core/src/utils/isString.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isString.ts#L0-L0).

## Overview

```ts
function isStringOrStringClass(target: any): target is string;
```

<!-- Description -->

## Description

Checks if a value is a string primitive, String object, or the String constructor.
