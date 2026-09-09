---
url: >-
  /api/platform/platform-log-request/types/domain/interface-platform-log-request-settings.md
description: >-
  api documentation of PlatformLogRequestSettings from
  @tsed/platform-log-request
---

## Usage

```typescript
import { PlatformLogRequestSettings } from "@tsed/platform-log-request";
```

> See [/packages/platform/platform-log-request/src/domain/PlatformLogRequestSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-log-request/src/domain/PlatformLogRequestSettings.ts#L0-L0).

## Overview

```ts
interface PlatformLogRequestSettings {
    logRequest?: boolean;
    alterLog?: AlterLogCallback;
    onLogResponse?: ($ctx: DIContext) => void;
}
```

## logRequest

```ts
logRequest?: boolean;
```

Log all incoming request. By default, is true and print the configured `logger.requestFields`.

## alterLog

```ts
alterLog?: AlterLogCallback;
```

A function to alter the log object before it's logged.

## onLogResponse:

```ts
onLogResponse?: ($ctx: DIContext) => void;
```

A function to log the server response.
