---
url: >-
  /api/platform/platform-http/types/common/interfaces/interface-before-routes-init.md
description: api documentation of BeforeRoutesInit from @tsed/platform-http
---

## Usage

```typescript
import { BeforeRoutesInit } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/BeforeRoutesInit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/BeforeRoutesInit.ts#L0-L0).

## Overview

```ts
interface BeforeRoutesInit {
    $beforeRoutesInit(): void | Promise<any>;
}
```

## $beforeRoutesInit

```ts
$beforeRoutesInit(): void | Promise<any>;
```
