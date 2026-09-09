---
url: >-
  /api/platform/platform-http/types/common/services/class-platform-application.md
description: api documentation of PlatformApplication from @tsed/platform-http
---

## Usage

```typescript
import { PlatformApplication } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/PlatformApplication.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/PlatformApplication.ts#L0-L0).

## Overview

```ts
class PlatformApplication<App = TsED.Application> extends PlatformRouter {
    rawApp: App;
    rawCallback(): any;
    getApp(): App;
    callback(): (req: IncomingMessage, res: ServerResponse) => any;
    callback(req: IncomingMessage, res: ServerResponse): any;
}
```

## Description

`PlatformApplication` is used to provide all routes collected by annotation `@Controller`.

## rawApp

```ts
rawApp: App;
```

## rawCallback

```ts
rawCallback(): any;
```

## getApp

```ts
getApp(): App;
```

## callback

```ts
callback(): (req: IncomingMessage, res: ServerResponse) => any;
```

## callback

```ts
callback(req: IncomingMessage, res: ServerResponse): any;
```
