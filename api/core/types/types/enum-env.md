---
url: /api/core/types/types/enum-env.md
description: api documentation of Env from @tsed/core
---

## Usage

```typescript
import { Env } from "@tsed/core";
```

> See [/packages/core/src/types/Env.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/core/src/types/Env.ts#L0-L0).

## Overview

```ts
enum Env {
    PROD = "production",
    DEV = "development",
    TEST = "test"
}
```

## Description

Represents the current application runtime environment.

Used by Ts.ED to adapt behaviors (logging, error verbosity, defaults, etc.)
depending on the environment.

## PROD

```ts
PROD = "production",
```

## DEV

```ts
DEV = "development",
```

## TEST

```ts
TEST = "test"
```
