---
title: PlatformLogRequestSettings from @tsed/platform-log-request
description: api documentation of PlatformLogRequestSettings from @tsed/platform-log-request
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformLogRequestSettings interface
---
# PlatformLogRequestSettings - @tsed/platform-log-request

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

<!-- Members -->

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
