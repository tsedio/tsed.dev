---
url: /api/config/core/types/providers/dotenv/class-dot-envs-config-source.md
description: api documentation of DotEnvsConfigSource from @tsed/config
---

## Usage

```typescript
import { DotEnvsConfigSource } from "@tsed/config/core/src/providers/dotenv/DotEnvsConfigSource";
```

> See [/packages/config/core/src/providers/dotenv/DotEnvsConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/providers/dotenv/DotEnvsConfigSource.ts#L0-L0).

## Overview

```ts
class DotEnvsConfigSource extends EnvsConfigSource<DotEnvsConfigSourceOptions> {
    getAll(): Record<string, unknown>;
    watch(onChange?: ConfigSourceOnChangeCB): Promise<() => void>;
}
```

## getAll

```ts
getAll(): Record<string, unknown>;
```

## watch

```ts
watch(onChange?: ConfigSourceOnChangeCB): Promise<() => void>;
```
