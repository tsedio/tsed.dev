---
url: >-
  /api/platform/platform-express/types/services/class-platform-express-response.md
description: api documentation of PlatformExpressResponse from @tsed/platform-express
---

## Usage

```typescript
import { PlatformExpressResponse } from "@tsed/platform-express";
```

> See [/packages/platform/platform-express/src/services/PlatformExpressResponse.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-express/src/services/PlatformExpressResponse.ts#L0-L0).

## Overview

```ts
class PlatformExpressResponse extends PlatformResponse<TsED.Response> {
    cookie(name: string, value: string | null, opts?: TsED.SetCookieOpts): this;
    protected end(data?: number | string | Buffer): void;
}
```

## cookie

```ts
cookie(name: string, value: string | null, opts?: TsED.SetCookieOpts): this;
```

## protected end

```ts
protected end(data?: number | string | Buffer): void;
```
