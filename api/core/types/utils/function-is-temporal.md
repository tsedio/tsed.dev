---
url: /api/core/types/utils/function-is-temporal.md
description: api documentation of isTemporal from @tsed/core
---

## Usage

```typescript
import { isTemporal } from "@tsed/core";
```

> See [/packages/core/src/utils/isTemporal.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/utils/isTemporal.ts#L0-L0).

## Overview

```ts
function isTemporal(target: any): boolean;
```

## Description

Checks if a value is a `Temporal.*` constructor (e.g. `Temporal.Instant`) or an instance of one.

Like {@link isDate}, these types map to a JSON schema `string`: every `Temporal.*` type exposes a
static `from(string)` factory and an ISO-8601 `toString()`. The global `Temporal` object is
absent on older runtimes (Node < 24), so the check is guarded and returns `false` there.
