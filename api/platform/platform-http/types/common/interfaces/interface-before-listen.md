---
url: /api/platform/platform-http/types/common/interfaces/interface-before-listen.md
description: api documentation of BeforeListen from @tsed/platform-http
---

## Usage

```typescript
import { BeforeListen } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/BeforeListen.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/BeforeListen.ts#L0-L0).

## Overview

```ts
interface BeforeListen {
    $beforeListen(): void | Promise<any>;
}
```

## $beforeListen

```ts
$beforeListen(): void | Promise<any>;
```
