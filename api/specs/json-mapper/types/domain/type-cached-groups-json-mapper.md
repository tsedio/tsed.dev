---
url: /api/specs/json-mapper/types/domain/type-cached-groups-json-mapper.md
description: api documentation of CachedGroupsJsonMapper from @tsed/json-mapper
---

## Usage

```typescript
import { CachedGroupsJsonMapper } from "@tsed/specs/json-mapper/src/domain/JsonMapperCompiler";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
type CachedGroupsJsonMapper<Options> = Map<string, CachedJsonMapper<Options>>;
```

## Description

Cached mapper registry keyed by the groups fingerprint generated for a schema.
