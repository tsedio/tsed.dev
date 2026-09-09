---
title: CachedGroupsJsonMapper from @tsed/json-mapper
description: api documentation of CachedGroupsJsonMapper from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation CachedGroupsJsonMapper type
---
# CachedGroupsJsonMapper - @tsed/json-mapper

## Usage

```typescript
import { CachedGroupsJsonMapper } from "@tsed/specs/json-mapper/src/domain/JsonMapperCompiler";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperCompiler.ts#L0-L0).

## Overview

```ts
type CachedGroupsJsonMapper<Options> = Map<string, CachedJsonMapper<Options>>;
```

<!-- Description -->

## Description

Cached mapper registry keyed by the groups fingerprint generated for a schema.
