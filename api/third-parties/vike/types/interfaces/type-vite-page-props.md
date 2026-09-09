---
url: /api/third-parties/vike/types/interfaces/type-vite-page-props.md
description: api documentation of VitePageProps from @tsed/vike
---

## Usage

```typescript
import { VitePageProps } from "@tsed/third-parties/vike/src/interfaces/ViteRenderContext";
```

> See [/packages/third-parties/vike/src/interfaces/ViteRenderContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/vike/src/interfaces/ViteRenderContext.ts#L0-L0).

## Overview

```ts
type VitePageProps<Data = Record<string, unknown>> = Data & {
    view: string;
};
```

## view

```ts
view: string;
```
