---
url: /api/core/types/utils/function-is-inherited-from.md
description: api documentation of isInheritedFrom from @tsed/core
---

## Usage

```typescript
import { isInheritedFrom } from "@tsed/core";
```

> See [/packages/core/src/utils/isInheritedFrom.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isInheritedFrom.ts#L0-L0).

## Overview

```ts
function isInheritedFrom(target: any, from: any, deep?: number): boolean;
```

## Description

Checks if a target class inherits from another class within a specified depth limit.
