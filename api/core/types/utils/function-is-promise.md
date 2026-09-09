---
url: /api/core/types/utils/function-is-promise.md
description: api documentation of isPromise from @tsed/core
---

## Usage

```typescript
import { isPromise } from "@tsed/core";
```

> See [/packages/core/src/utils/isPromise.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isPromise.ts#L0-L0).

## Overview

```ts
function isPromise<T = any>(target: any): target is Promise<T>;
```

## Description

Checks if a value is a Promise by verifying the then method exists and it's not an Observable.
