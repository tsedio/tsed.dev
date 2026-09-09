---
title: PlatformContextOptions from @tsed/platform-http
description: api documentation of PlatformContextOptions from @tsed/platform-http
meta:
 - name: keywords
   description: api typescript node.js documentation PlatformContextOptions interface
---
# PlatformContextOptions - @tsed/platform-http

## Usage

```typescript
import { PlatformContextOptions } from "@tsed/platform-http";
```

> See [/packages/platform/platform-http/src/common/domain/PlatformContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-http/src/common/domain/PlatformContext.ts#L0-L0).

## Overview

```ts
interface PlatformContextOptions extends DIContextOptions {
    event: IncomingEvent;
    ignoreUrlPatterns?: any[];
    endpoint?: JsonMethodStore;
}
```

<!-- Members -->

## event

```ts
event: IncomingEvent;
```

## ignoreUrlPatterns

```ts
ignoreUrlPatterns?: any[];
```

## endpoint

```ts
endpoint?: JsonMethodStore;
```
