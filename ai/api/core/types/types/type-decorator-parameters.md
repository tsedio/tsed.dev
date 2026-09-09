---
title: DecoratorParameters from @tsed/core
description: api documentation of DecoratorParameters from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation DecoratorParameters type
---
# DecoratorParameters - @tsed/core

## Usage

```typescript
import { DecoratorParameters } from "@tsed/core/src/types/DecoratorParameters";
```

> See [/packages/core/src/types/DecoratorParameters.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/DecoratorParameters.ts#L0-L0).

## Overview

```ts
type DecoratorParameters = [any, string | symbol, number | PropertyDescriptor];
```

<!-- Description -->

## Description

Raw parameters passed by the TypeScript runtime to any decorator
(class, property, method or parameter).

The tuple contains:

-   the target (class `prototype` for instance members or the constructor for static members),
-   the key (`string | symbol`) of the decorated member,
-   the parameter index (number) or the `PropertyDescriptor` depending on the decorator type.

```ts
function MyDecorator(...args: DecoratorParameters) {}
```
