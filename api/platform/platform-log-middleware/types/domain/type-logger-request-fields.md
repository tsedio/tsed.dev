---
url: >-
  /api/platform/platform-log-middleware/types/domain/type-logger-request-fields.md
description: api documentation of LoggerRequestFields from @tsed/platform-log-middleware
---

## Usage

```typescript
import { LoggerRequestFields } from "@tsed/platform/platform-log-middleware/src/domain/PlatformLogMiddlewareSettings";
```

> See [/packages/platform/platform-log-middleware/src/domain/PlatformLogMiddlewareSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-log-middleware/src/domain/PlatformLogMiddlewareSettings.ts#L0-L0).

## Overview

```ts
type LoggerRequestFields = ("reqId" | "method" | "url" | "headers" | "body" | "query" | "params" | "duration" | string)[];
```
