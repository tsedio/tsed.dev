---
url: /api/core/types/utils/function-name-of-class.md
description: api documentation of nameOfClass from @tsed/core
---

## Usage

```typescript
import { nameOfClass } from "@tsed/core";
```

> See [/packages/core/src/utils/nameOf.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/nameOf.ts#L0-L0).

## Overview

```ts
function nameOfClass(targetClass: any): string;
```

## Description

Gets the name of a class from a constructor function or instance.
