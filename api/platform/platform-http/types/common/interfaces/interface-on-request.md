---
url: /api/platform/platform-http/types/common/interfaces/interface-on-request.md
description: api documentation of OnRequest from @tsed/platform-http
---

## Usage

```typescript
import { OnRequest } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/interfaces/OnRequest.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/interfaces/OnRequest.ts#L0-L0).

## Overview

```ts
interface OnRequest {
    $onRequest(ctx: PlatformContext): void;
}
```

## $onRequest

```ts
$onRequest(ctx: PlatformContext): void;
```
