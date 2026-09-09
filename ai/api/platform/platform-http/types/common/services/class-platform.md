---
title: Platform from @tsed/platform-http
description: api documentation of Platform from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation Platform class
---
# Platform - @tsed/platform-http

## Usage

```typescript
import { Platform } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/services/Platform.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/services/Platform.ts#L0-L0).

## Overview

```ts
class Platform {
    readonly platformRouters: PlatformRouters;
    constructor();
    get app(): import("./PlatformApplication.js").PlatformApplication<TsED.Application>;
    addRoutes(routes: Route[]): void;
    addRoute(route: string, token: TokenProvider): this;
    getLayers(): PlatformLayer[];
    getMountedControllers(): RouteController[];
}
```

<!-- Description -->

## Description

`Platform` is used to provide all routes collected by annotation `@Controller`.

<!-- Members -->

## readonly platformRouters

```ts
readonly platformRouters: PlatformRouters;
```

## get app

```ts
get app(): import("./PlatformApplication.js").PlatformApplication<TsED.Application>;
```

## addRoutes

```ts
addRoutes(routes: Route[]): void;
```

## addRoute

```ts
addRoute(route: string, token: TokenProvider): this;
```

## getLayers

```ts
getLayers(): PlatformLayer[];
```

## getMountedControllers

```ts
getMountedControllers(): RouteController[];
```

Get all controllers mounted on the application.
