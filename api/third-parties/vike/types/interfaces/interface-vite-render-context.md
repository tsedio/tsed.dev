---
url: /api/third-parties/vike/types/interfaces/interface-vite-render-context.md
description: api documentation of ViteRenderContext from @tsed/vike
---

## Usage

```typescript
import { ViteRenderContext } from "@tsed/vike";
```

> See [/packages/third-parties/vike/src/interfaces/ViteRenderContext.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/vike/src/interfaces/ViteRenderContext.ts#L0-L0).

## Overview

```ts
interface ViteRenderContext<Data = Record<string, unknown>, Session = Record<string, unknown>> extends Record<string, unknown> {
    host: string;
    protocol: string;
    method: string;
    url: string;
    secure: boolean;
    headers: IncomingHttpHeaders;
    session?: Session;
}
```

## host

```ts
host: string;
```

## protocol

```ts
protocol: string;
```

## method

```ts
method: string;
```

## url

```ts
url: string;
```

## secure

```ts
secure: boolean;
```

## headers

```ts
headers: IncomingHttpHeaders;
```

## session

```ts
session?: Session;
```
