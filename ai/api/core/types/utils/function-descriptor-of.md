---
title: descriptorOf from @tsed/core
description: api documentation of descriptorOf from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation descriptorOf function
---
# descriptorOf - @tsed/core

## Usage

```typescript
import { descriptorOf } from "@tsed/core";
```

> See [/packages/core/src/utils/descriptorOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/descriptorOf.ts#L0-L0).

## Overview

```ts
function descriptorOf(target: any, propertyKey: string | symbol): PropertyDescriptor;
```

<!-- Description -->

## Description

Retrieves the property descriptor for a given class and property key.

Checks both the target and its prototype for the property descriptor.
