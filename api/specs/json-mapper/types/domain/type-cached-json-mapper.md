---
url: /api/specs/json-mapper/types/domain/type-cached-json-mapper.md
description: api documentation of CachedJsonMapper from @tsed/json-mapper
---

## Usage

```typescript
import { CachedJsonMapper } from "@tsed/specs/json-mapper/src/domain/JsonMapperCompiler";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
type CachedJsonMapper<Options> = {
    id: string;
    fn: JsonMapperCallback<Options>;
};
```

## Description

Executable mapper plus its unique identifier stored in the compiler cache.

## id

```ts
id: string;
```

## fn

```ts
fn: JsonMapperCallback<Options>;
```
