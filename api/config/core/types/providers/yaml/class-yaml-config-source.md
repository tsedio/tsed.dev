---
url: /api/config/core/types/providers/yaml/class-yaml-config-source.md
description: api documentation of YamlConfigSource from @tsed/config
---

## Usage

```typescript
import { YamlConfigSource } from "@tsed/config/core/src/providers/yaml/YamlConfigSource";
```

> See [/packages/config/core/src/providers/yaml/YamlConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/providers/yaml/YamlConfigSource.ts#L0-L0).

## Overview

```ts
class YamlConfigSource implements ConfigSource<YamlConfigSourceOptions> {
    options: YamlConfigSourceOptions;
    getAll(): Promise<Record<string, unknown>>;
    watch(onChange: ConfigSourceOnChangeCB): () => void;
}
```

## options

```ts
options: YamlConfigSourceOptions;
```

## getAll

```ts
getAll(): Promise<Record<string, unknown>>;
```

## watch

```ts
watch(onChange: ConfigSourceOnChangeCB): () => void;
```
