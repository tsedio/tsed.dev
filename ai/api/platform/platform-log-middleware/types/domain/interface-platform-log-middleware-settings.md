---
title: PlatformLogMiddlewareSettings from @tsed/platform-log-middleware
description: api documentation of PlatformLogMiddlewareSettings from @tsed/platform-log-middleware
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformLogMiddlewareSettings interface
---
# PlatformLogMiddlewareSettings - @tsed/platform-log-middleware

## Usage

```typescript
import { PlatformLogMiddlewareSettings } from "@tsed/platform-log-middleware";
```

> See [/packages/platform/platform-log-middleware/src/domain/PlatformLogMiddlewareSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-log-middleware/src/domain/PlatformLogMiddlewareSettings.ts#L0-L0).

## Overview

```ts
interface PlatformLogMiddlewareSettings {
    requestFields?: LoggerRequestFields;
    logRequest?: boolean;
    logStart?: boolean;
    logEnd?: boolean;
}
```

<!-- Members -->

## requestFields

```ts
requestFields?: LoggerRequestFields;
```

Fields displayed when a request is logged. Possible values: `reqId`, `method`, `url`, `headers`, `body`, `query`,`params`, `duration`.

## logRequest

```ts
logRequest?: boolean;
```

Log all incoming request. By default, is true and print the configured `logger.requestFields`.

## logStart

```ts
logStart?: boolean;
```

Log start of all incoming request. By default, is false

## logEnd

```ts
logEnd?: boolean;
```

Log end of all incoming request. By default, is true
