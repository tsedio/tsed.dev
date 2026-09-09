---
title: ViteConfig from @tsed/vike
description: api documentation of ViteConfig from @tsed/vike
meta:
 - name: keywords
   description: api typescript node.js documentation ViteConfig type
---
# ViteConfig - @tsed/vike

## Usage

```typescript
import { ViteConfig } from "@tsed/third-parties/vike/src/interfaces/ViteConfig";
```

> See [/packages/third-parties/vike/src/interfaces/ViteConfig.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/third-parties/vike/src/interfaces/ViteConfig.ts#L0-L0).

## Overview

```ts
type ViteConfig = InlineConfig & {
    enableStream?: boolean;
    statics?: Omit<Options, "dev">;
    stateSnapshot?(): unknown;
};
```

<!-- Members -->

## enableStream

```ts
enableStream?: boolean;
```

## statics

```ts
statics?: Omit<Options, "dev">;
```

## stateSnapshot

```ts
stateSnapshot?(): unknown;
```
