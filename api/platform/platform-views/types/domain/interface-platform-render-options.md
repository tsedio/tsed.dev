---
url: /api/platform/platform-views/types/domain/interface-platform-render-options.md
description: api documentation of PlatformRenderOptions from @tsed/platform-views
---

## Usage

```typescript
import { PlatformRenderOptions } from "@tsed/platform-views";
```

> See [/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts#L0-L0).

## Overview

```ts
interface PlatformRenderOptions extends Record<string, unknown> {
    $ctx: BaseContext;
}
```

## $ctx

```ts
$ctx: BaseContext;
```
