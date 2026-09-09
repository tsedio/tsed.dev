---
url: /api/core/types/utils/function-is-moment-object.md
description: api documentation of isMomentObject from @tsed/core
---

## Usage

```typescript
import { isMomentObject } from "@tsed/core";
```

> See [/packages/core/src/utils/isMomentObject.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isMomentObject.ts#L0-L0).

## Overview

```ts
function isMomentObject(obj: any): boolean;
```

## Description

Checks if an object is a Moment.js object by verifying the \_isAMomentObject property.
