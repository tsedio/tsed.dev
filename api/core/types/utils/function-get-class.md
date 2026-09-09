---
url: /api/core/types/utils/function-get-class.md
description: api documentation of getClass from @tsed/core
---

## Usage

```typescript
import { getClass } from "@tsed/core";
```

> See [/packages/core/src/utils/classOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/classOf.ts#L0-L0).

## Overview

```ts
function getClass(target: any): any;
```

* **target** (`any`): Instance or constructor.

## Description

Returns the constructor of a target. If `target` is already a class
(constructor function), it is returned as is; if it is an instance,
its constructor is returned.

```ts
class A {}
getClass(A) === A; // true
getClass(new A()) === A; // true
```
