---
title: StoreFn from @tsed/core
description: api documentation of StoreFn from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation StoreFn decorator
---
# StoreFn - @tsed/core

## Usage

```typescript
import { StoreFn } from "@tsed/core";
```

> See [/packages/core/src/decorators/storeFn.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/decorators/storeFn.ts#L0-L0).

## Overview

```ts
function StoreFn(fn: (store: Store, parameters: DecoratorParameters) => void): Function;
```

<!-- Description -->

## Description

Creates a decorator factory that initializes a Store from decorator parameters and invokes a callback.

The callback receives both the Store instance and the original decorator parameters.
If the callback returns a function, that function is invoked with the same decorator parameters.
