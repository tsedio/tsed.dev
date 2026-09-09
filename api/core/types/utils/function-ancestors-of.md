---
url: /api/core/types/utils/function-ancestors-of.md
description: api documentation of ancestorsOf from @tsed/core
---

## Usage

```typescript
import { ancestorsOf } from "@tsed/core";
```

> See [/packages/core/src/utils/ancestorsOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/ancestorsOf.ts#L0-L0).

## Overview

```ts
function ancestorsOf(target: any): any[];
```

## Description

Returns all ancestor classes in the prototype chain of the target.

Traverses the prototype chain from the target's class up to the root,
returning an array of all named constructor functions encountered.
