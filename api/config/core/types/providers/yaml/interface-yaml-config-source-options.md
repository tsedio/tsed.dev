---
url: /api/config/core/types/providers/yaml/interface-yaml-config-source-options.md
description: api documentation of YamlConfigSourceOptions from @tsed/config
---

## Usage

```typescript
import { YamlConfigSourceOptions } from "@tsed/config";
```

> See [/packages/config/core/src/providers/yaml/YamlConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/config/core/src/providers/yaml/YamlConfigSource.ts#L0-L0).

## Overview

```ts
interface YamlConfigSourceOptions extends LoadOptions {
    path: string;
    encoding?: BufferEncoding;
}
```

## path

```ts
path: string;
```

The path to the YAML file.

## encoding

```ts
encoding?: BufferEncoding;
```

The encoding to use when reading the file.
