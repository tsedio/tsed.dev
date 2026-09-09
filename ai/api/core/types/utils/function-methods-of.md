---
title: methodsOf from @tsed/core
description: api documentation of methodsOf from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation methodsOf function
---
# methodsOf - @tsed/core

## Usage

```typescript
import { methodsOf } from "@tsed/core";
```

> See [/packages/core/src/utils/methodsOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/methodsOf.ts#L0-L0).

## Overview

```ts
function methodsOf(target: any): {
    target: Type;
    propertyKey: string;
}[];
```

<!-- Description -->

## Description

Returns all methods for a given class by traversing its prototype chain.

<!-- Members -->

## target

```ts
target: Type;
```

## propertyKey

```ts
propertyKey: string;
```
