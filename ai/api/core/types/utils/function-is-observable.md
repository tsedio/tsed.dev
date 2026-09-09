---
title: isObservable from @tsed/core
description: api documentation of isObservable from @tsed/core
meta:
 - name: keywords
   description: api typescript node.js documentation isObservable function
---
# isObservable - @tsed/core

## Usage

```typescript
import { isObservable } from "@tsed/core";
```

> See [/packages/core/src/utils/isObservable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isObservable.ts#L0-L0).

## Overview

```ts
function isObservable<T>(obj: any): obj is Observable<T>;
```

<!-- Description -->

## Description

Checks if an object is an RxJS Observable by verifying lift and subscribe methods.
