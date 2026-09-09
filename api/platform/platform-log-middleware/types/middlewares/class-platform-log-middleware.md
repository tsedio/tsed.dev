---
url: >-
  /api/platform/platform-log-middleware/types/middlewares/class-platform-log-middleware.md
description: api documentation of PlatformLogMiddleware from @tsed/platform-log-middleware
---

## Usage

```typescript
import { PlatformLogMiddleware } from "@tsed/platform-log-middleware";
```

> See [/packages/platform/platform-log-middleware/src/middlewares/PlatformLogMiddleware.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-log-middleware/src/middlewares/PlatformLogMiddleware.ts#L0-L0).

## Overview

```ts
class PlatformLogMiddleware implements MiddlewareMethods {
    protected requestFields: LoggerRequestFields;
    protected logRequest: boolean;
    protected logStart: boolean;
    protected logEnd: boolean;
    protected logLevel: string;
    get settings(): this;
    use(ctx: Context): void;
    onLogEnd(ctx: Context): void;
    protected onLogStart(ctx: Context): void;
    protected configureRequest(ctx: Context): void;
    protected requestToObject(ctx: Context): any;
    protected minimalRequestPicker(ctx: Context): any;
}
```

## protected requestFields

```ts
protected requestFields: LoggerRequestFields;
```

## protected logRequest

```ts
protected logRequest: boolean;
```

## protected logStart

```ts
protected logStart: boolean;
```

## protected logEnd

```ts
protected logEnd: boolean;
```

## protected logLevel

```ts
protected logLevel: string;
```

## get settings

```ts
get settings(): this;
```

## use

```ts
use(ctx: Context): void;
```

Handle the request.

## onLogEnd

```ts
onLogEnd(ctx: Context): void;
```

Called when the `$onResponse` is called by Ts.ED (through Express.end).

## protected onLogStart

```ts
protected onLogStart(ctx: Context): void;
```

The separate onLogStart() function will allow developer to overwrite the initial request log.

## protected configureRequest

```ts
protected configureRequest(ctx: Context): void;
```

Attach all information that will be necessary to log the request. Attach a new `request.log` object.

## protected requestToObject

```ts
protected requestToObject(ctx: Context): any;
```

Return complete request info.

## protected minimalRequestPicker

```ts
protected minimalRequestPicker(ctx: Context): any;
```

Return a filtered request from global configuration.
