---
url: /api/specs/json-mapper/types/domain/function-register-json-type-mapper.md
description: api documentation of registerJsonTypeMapper from @tsed/json-mapper
---

## Usage

```typescript
import { registerJsonTypeMapper } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonMapperTypesContainer.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonMapperTypesContainer.ts#L0-L0).

## Overview

```ts
function registerJsonTypeMapper(type: Type<any> | Symbol | string, token: Type<JsonMapperMethods>): void;
```

## Description

Register a mapper class for a specific primitive/complex type so it can be reused by the serializers.
