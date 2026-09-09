---
url: /api/core/types/utils/function-is-class-object.md
description: api documentation of isClassObject from @tsed/core
---

## Usage

```typescript
import { isClassObject } from "@tsed/core";
```

> See [/packages/core/src/utils/isPlainObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isPlainObject.ts#L0-L0).

## Overview

```ts
function isClassObject(target: any): target is Object;
```

## Description

Checks if a value is the Object constructor.
