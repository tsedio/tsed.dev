---
url: >-
  /api/platform/platform-views/types/domain/interface-platform-view-writable-stream.md
description: api documentation of PlatformViewWritableStream from @tsed/platform-views
---

## Usage

```typescript
import { PlatformViewWritableStream } from "@tsed/platform-views";
```

> See [/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts#L0-L0).

## Overview

```ts
interface PlatformViewWritableStream {
    pipe(stream: Writable): void;
}
```

## pipe

```ts
pipe(stream: Writable): void;
```
