---
title: decoratorTypeOf from @tsed/core
description: api documentation of decoratorTypeOf from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation decoratorTypeOf function
---
# decoratorTypeOf - @tsed/core

## Usage

```typescript
import { decoratorTypeOf } from "@tsed/core";
```

> See [/packages/core/src/utils/decoratorTypeOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/decoratorTypeOf.ts#L0-L0).

## Overview

```ts
function decoratorTypeOf(args: any[]): DecoratorTypes;
```

<!-- Description -->

## Description

Determines the decorator type from decorator parameters.

Analyzes the target, propertyKey, and descriptor to classify the decorator as
class, method, property, parameter, or their static variants.
