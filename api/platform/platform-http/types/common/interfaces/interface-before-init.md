---
url: /api/platform/platform-http/types/common/interfaces/interface-before-init.md
description: api documentation of BeforeInit from @tsed/platform-http
---

## Usage

```typescript
import { BeforeInit } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/BeforeInit.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/BeforeInit.ts#L0-L0).

## Overview

```ts
interface BeforeInit {
    $beforeInit(): void | Promise<any>;
}
```

## $beforeInit

```ts
$beforeInit(): void | Promise<any>;
```
