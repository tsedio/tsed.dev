---
url: /api/config/core/types/providers/yaml/interface-yaml-config-source-options.md
description: api documentation of YamlConfigSourceOptions from @tsed/config
---

## Usage

```typescript
import { YamlConfigSourceOptions } from "@tsed/config";
```

> See [/packages/config/core/src/providers/yaml/YamlConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/providers/yaml/YamlConfigSource.ts#L0-L0).

## Overview

```ts
interface YamlConfigSourceOptions extends LoadOptions {
    path: string;
}
```

## path

```ts
path: string;
```

The path to the JSON file.
