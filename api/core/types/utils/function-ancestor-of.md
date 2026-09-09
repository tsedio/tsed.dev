---
url: /api/core/types/utils/function-ancestor-of.md
description: api documentation of ancestorOf from @tsed/core
---

## Usage

```typescript
import { ancestorOf } from "@tsed/core";
```

> See [/packages/core/src/utils/ancestorOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/ancestorOf.ts#L0-L0).

## Overview

```ts
function ancestorOf(target: any): any;
```

## Description

Returns the immediate prototype (ancestor) of the given target.

Internally uses `Object.getPrototypeOf` to retrieve the prototype chain ancestor.
