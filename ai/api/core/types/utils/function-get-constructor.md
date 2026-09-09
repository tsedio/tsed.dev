---
title: getConstructor from @tsed/core
description: api documentation of getConstructor from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation getConstructor function
---
# getConstructor - @tsed/core

## Usage

```typescript
import { getConstructor } from "@tsed/core";
```

> See [/packages/core/src/utils/constructorOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/constructorOf.ts#L0-L0).

## Overview

```ts
function getConstructor(target: any): Type<any>;
```

-   **target** (`any`): A class constructor or an instance.

<!-- Description -->

## Description

Get the class constructor from a class or an instance.

If `target` is already a constructor, it is returned as-is; otherwise the
constructor of the instance is returned.

```ts
class A {}
getConstructor(A) === A; // true
getConstructor(new A()) === A; // true
```
