---
title: PLATFORM_CONTENT_TYPES_CONTAINER from @tsed/platform-response-filter
description: api documentation of PLATFORM_CONTENT_TYPES_CONTAINER from @tsed/platform-response-filter
meta:
 - name: keywords
   description: api typescript node.js documentation PLATFORM_CONTENT_TYPES_CONTAINER const
---
# PLATFORM_CONTENT_TYPES_CONTAINER - @tsed/platform-response-filter

## Usage

```typescript
import { PLATFORM_CONTENT_TYPES_CONTAINER } from "@tsed/platform-response-filter";
```

> See [/packages/platform/platform-response-filter/src/services/PlatformContentTypesContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-response-filter/src/services/PlatformContentTypesContainer.ts#L0-L0).

## Overview

```ts
const PLATFORM_CONTENT_TYPES_CONTAINER: import("@tsed/di").FactoryTokenProvider<{
    contentTypes: string[];
    resolve(bestContentType: string): ResponseFilterMethods<unknown> | undefined;
}>;
export type PLATFORM_CONTENT_TYPES_CONTAINER = typeof PLATFORM_CONTENT_TYPES_CONTAINER;
```

<!-- Members -->

## contentTypes

```ts
contentTypes: string[];
```

## resolve

```ts
resolve(bestContentType: string): ResponseFilterMethods<unknown> | undefined;
```
