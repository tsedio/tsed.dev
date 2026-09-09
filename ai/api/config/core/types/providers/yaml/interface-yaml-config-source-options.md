---
title: YamlConfigSourceOptions from @tsed/config
description: api documentation of YamlConfigSourceOptions from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation YamlConfigSourceOptions interface
---
# YamlConfigSourceOptions - @tsed/config

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

<!-- Members -->

## path

```ts
path: string;
```

The path to the JSON file.
