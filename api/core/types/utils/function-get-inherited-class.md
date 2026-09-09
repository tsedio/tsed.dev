---
url: /api/core/types/utils/function-get-inherited-class.md
description: api documentation of getInheritedClass from @tsed/core
---

## Usage

```typescript
import { getInheritedClass } from "@tsed/core";
```

> See [/packages/core/src/utils/ancestorOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/ancestorOf.ts#L0-L0).

## Overview

```ts
function getInheritedClass(target: any): any;
```

## Description

Returns the inherited class (ancestor) of the given target.

An alias for {@link ancestorOf}.
