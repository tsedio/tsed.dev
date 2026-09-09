---
url: /api/specs/json-mapper/types/domain/function-get-json-mapper-types.md
description: api documentation of getJsonMapperTypes from @tsed/json-mapper
---

## Usage

```typescript
import { getJsonMapperTypes } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperTypesContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperTypesContainer.ts#L0-L0).

## Overview

```ts
function getJsonMapperTypes(): Map<Type<any> | Symbol | string, JsonMapperMethods>;
```

## Description

Retrieve the registry of custom JSON mapper instances keyed by the types they support.
