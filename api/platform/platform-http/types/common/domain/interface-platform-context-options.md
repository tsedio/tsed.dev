---
url: >-
  /api/platform/platform-http/types/common/domain/interface-platform-context-options.md
description: api documentation of PlatformContextOptions from @tsed/platform-http
---

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
