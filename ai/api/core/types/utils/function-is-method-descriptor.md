---
title: isMethodDescriptor from @tsed/core
description: api documentation of isMethodDescriptor from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isMethodDescriptor function
---
# isMethodDescriptor - @tsed/core

## Usage

```typescript
import { isMethodDescriptor } from "@tsed/core";
```

> See [/packages/core/src/utils/descriptorOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/descriptorOf.ts#L0-L0).

## Overview

```ts
function isMethodDescriptor(target: any, propertyKey: string | symbol): any;
```

<!-- Description -->

## Description

Checks whether a property descriptor represents a method.

Returns true if the descriptor has a value property (indicating a method).
