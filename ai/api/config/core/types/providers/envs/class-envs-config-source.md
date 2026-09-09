---
title: EnvsConfigSource from @tsed/config
description: api documentation of EnvsConfigSource from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation EnvsConfigSource class
---
# EnvsConfigSource - @tsed/config

## Usage

```typescript
import { EnvsConfigSource } from "@tsed/config/core/src/providers/envs/EnvsConfigSource";
```

> See [/packages/config/core/src/providers/envs/EnvsConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/providers/envs/EnvsConfigSource.ts#L0-L0).

## Overview

```ts
class EnvsConfigSource<Config extends EnvsConfigSourceOptions = EnvsConfigSourceOptions> implements ConfigSource<Config> {
    options: Config;
    getAll(): Record<string, unknown>;
}
```

<!-- Members -->

## options

```ts
options: Config;
```

## getAll

```ts
getAll(): Record<string, unknown>;
```
