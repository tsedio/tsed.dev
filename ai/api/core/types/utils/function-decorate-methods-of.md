---
title: decorateMethodsOf from @tsed/core
description: api documentation of decorateMethodsOf from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation decorateMethodsOf function
---
# decorateMethodsOf - @tsed/core

## Usage

```typescript
import { decorateMethodsOf } from "@tsed/core";
```

> See [/packages/core/src/utils/decorateMethodsOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/decorateMethodsOf.ts#L0-L0).

## Overview

```ts
function decorateMethodsOf(klass: any, decorator: any): void;
```

<!-- Description -->

## Description

Applies a decorator to all methods of a class, copying inherited methods if necessary.

For each method, if inherited from a parent class, it first copies the method to the target class
and merges its Store metadata, then applies the decorator.
