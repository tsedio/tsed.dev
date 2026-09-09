---
url: /api/config/core/types/providers/envs/class-envs-config-source.md
description: api documentation of EnvsConfigSource from @tsed/config
---

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

## options

```ts
options: Config;
```

## getAll

```ts
getAll(): Record<string, unknown>;
```
