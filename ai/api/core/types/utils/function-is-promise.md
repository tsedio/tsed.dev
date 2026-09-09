---
title: isPromise from @tsed/core
description: api documentation of isPromise from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isPromise function
---
# isPromise - @tsed/core

## Usage

```typescript
import { isPromise } from "@tsed/core";
```

> See [/packages/core/src/utils/isPromise.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isPromise.ts#L0-L0).

## Overview

```ts
function isPromise<T = any>(target: any): target is Promise<T>;
```

<!-- Description -->

## Description

Checks if a value is a Promise by verifying the then method exists and it's not an Observable.
