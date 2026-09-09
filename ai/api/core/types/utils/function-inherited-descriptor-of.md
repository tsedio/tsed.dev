---
title: inheritedDescriptorOf from @tsed/core
description: api documentation of inheritedDescriptorOf from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation inheritedDescriptorOf function
---
# inheritedDescriptorOf - @tsed/core

## Usage

```typescript
import { inheritedDescriptorOf } from "@tsed/core";
```

> See [/packages/core/src/utils/inheritedDescriptorOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/inheritedDescriptorOf.ts#L0-L0).

## Overview

```ts
function inheritedDescriptorOf(target: any, propertyKey: string): PropertyDescriptor | undefined;
```

<!-- Description -->

## Description

Retrieves the property descriptor for a given property key from the target's inheritance chain.
