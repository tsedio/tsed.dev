---
title: YamlConfigSource from @tsed/config
description: api documentation of YamlConfigSource from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation YamlConfigSource class
---
# YamlConfigSource - @tsed/config

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

<!-- Members -->

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
