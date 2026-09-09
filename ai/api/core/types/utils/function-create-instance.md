---
title: createInstance from @tsed/core
description: api documentation of createInstance from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation createInstance function
---
# createInstance - @tsed/core

## Usage

```typescript
import { createInstance } from "@tsed/core";
```

> See [/packages/core/src/utils/createInstance.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/createInstance.ts#L0-L0).

## Overview

```ts
function createInstance(obj: any): any;
```

<!-- Description -->

## Description

Creates a lightweight object instance that inherits from the provided value's prototype.

If the input is a class or instance whose constructor is not Object, this function
returns `Object.create(obj)` to preserve the prototype chain without invoking the constructor.
Otherwise, it returns a plain empty object.
