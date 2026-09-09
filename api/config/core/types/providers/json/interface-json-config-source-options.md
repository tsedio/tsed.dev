---
url: /api/config/core/types/providers/json/interface-json-config-source-options.md
description: api documentation of JsonConfigSourceOptions from @tsed/config
---

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
