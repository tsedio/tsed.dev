---
url: /api/platform/platform-log-request/types/domain/type-alter-log-callback.md
description: api documentation of AlterLogCallback from @tsed/platform-log-request
---

## Usage

```typescript
import { AlterLogCallback } from "@tsed/platform/platform-log-request/src/domain/PlatformLogRequestSettings";
```

> See [/packages/platform/platform-log-request/src/domain/PlatformLogRequestSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-log-request/src/domain/PlatformLogRequestSettings.ts#L0-L0).

## Overview

```ts
type AlterLogCallback = (level: "debug" | "info" | "warn" | "error" | "all", obj: Record<string, unknown>, ctx: DIContext) => Record<string, unknown>;
```
