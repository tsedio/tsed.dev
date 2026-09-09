---
url: /api/config/core/types/providers/json/class-json-config-source.md
description: api documentation of JsonConfigSource from @tsed/config
---

## Usage

```typescript
import { JsonConfigSource } from "@tsed/config/core/src/providers/json/JsonConfigSource";
```

> See [/packages/config/core/src/providers/json/JsonConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/providers/json/JsonConfigSource.ts#L0-L0).

## Overview

```ts
class JsonConfigSource implements ConfigSource<JsonConfigSourceOptions> {
    options: JsonConfigSourceOptions;
    getAll(): Record<string, unknown>;
    watch(onChange: ConfigSourceOnChangeCB): () => void;
}
```

## options

```ts
options: JsonConfigSourceOptions;
```

## getAll

```ts
getAll(): Record<string, unknown>;
```

## watch

```ts
watch(onChange: ConfigSourceOnChangeCB): () => void;
```
