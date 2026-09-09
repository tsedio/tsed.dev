---
url: /api/platform/platform-views/types/domain/interface-platform-views-settings.md
description: api documentation of PlatformViewsSettings from @tsed/platform-views
---

## Usage

```typescript
import { PlatformViewsSettings } from "@tsed/platform-views";
```

> See [/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-views/src/domain/PlatformViewsSettings.ts#L0-L0).

## Overview

```ts
interface PlatformViewsSettings {
    disabled?: boolean;
    root?: string;
    cache?: boolean;
    extensions?: Partial<PlatformViewsExtensionsTypes>;
    viewEngine?: string;
    options?: Record<string, PlatformViewsEngineOptions>;
}
```

## disabled

```ts
disabled?: boolean;
```

## root

```ts
root?: string;
```

Views directory.

## cache

```ts
cache?: boolean;
```

Enable cache. Ts.ED enable cache in PRODUCTION profile by default.

## extensions

```ts
extensions?: Partial<PlatformViewsExtensionsTypes>;
```

Provide extensions mapping to match the expected engines.

## viewEngine

```ts
viewEngine?: string;
```

Default view engine extension.
Allow omitting extension when using View decorator or render method.

## options

```ts
options?: Record<string, PlatformViewsEngineOptions>;
```

Options mapping for each engine.
