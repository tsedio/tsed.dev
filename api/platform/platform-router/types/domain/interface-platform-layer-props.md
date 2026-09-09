---
url: /api/platform/platform-router/types/domain/interface-platform-layer-props.md
description: api documentation of PlatformLayerProps from @tsed/platform-router
---

## Usage

```typescript
import { PlatformLayerProps } from "@tsed/platform-router";
```

> See [/packages/platform/platform-router/src/domain/PlatformLayer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/platform/platform-router/src/domain/PlatformLayer.ts#L0-L0).

## Overview

```ts
interface PlatformLayerProps {
    parent: PlatformLayer;
    provider: Provider;
    path: SinglePathType;
    basePath: SinglePathType;
    method: string;
    handlers: any[];
    router: PlatformRouter;
    opts: PlatformLayerOptions;
}
```

## parent

```ts
parent: PlatformLayer;
```

## provider

```ts
provider: Provider;
```

## path

```ts
path: SinglePathType;
```

## basePath

```ts
basePath: SinglePathType;
```

## method

```ts
method: string;
```

## handlers

```ts
handlers: any[];
```

## router

```ts
router: PlatformRouter;
```

## opts

```ts
opts: PlatformLayerOptions;
```
