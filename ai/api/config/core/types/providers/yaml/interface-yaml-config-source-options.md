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

> See [/packages/config/core/src/providers/yaml/YamlConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.43.2/packages/config/core/src/providers/yaml/YamlConfigSource.ts#L0-L0).

## Overview

```ts
interface YamlConfigSourceOptions extends LoadOptions {
    path: string;
    encoding?: BufferEncoding;
}
```

<!-- Members -->

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
