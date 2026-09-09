---
title: JsonConfigSourceOptions from @tsed/config
description: api documentation of JsonConfigSourceOptions from @tsed/config
meta:
 - name: keywords
   description: api typescript node.js documentation JsonConfigSourceOptions interface
---
# JsonConfigSourceOptions - @tsed/config

## Usage

```typescript
import { JsonConfigSourceOptions } from "@tsed/config";
```

> See [/packages/config/core/src/providers/json/JsonConfigSource.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/config/core/src/providers/json/JsonConfigSource.ts#L0-L0).

## Overview

```ts
interface JsonConfigSourceOptions {
    path: string;
    encoding?: BufferEncoding;
}
```

<!-- Members -->

## path

```ts
path: string;
```

The path to the JSON file.

## encoding

```ts
encoding?: BufferEncoding;
```

The encoding to use when reading the file.
