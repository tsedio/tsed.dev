---
url: >-
  /api/specs/schema/types/components/mappers/open-spec/type-json-parameter-options.md
description: api documentation of JsonParameterOptions from @tsed/schema
---

## Usage

```typescript
import { JsonParameterOptions } from "@tsed/specs/schema/src/components/mappers/open-spec/operationInParameterMapper";
```

> See [/packages/specs/schema/src/components/mappers/open-spec/operationInParameterMapper.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/mappers/open-spec/operationInParameterMapper.ts#L0-L0).

## Overview

```ts
type JsonParameterOptions = JsonSchemaOptions & {
    jsonParameter: JsonParameter;
    jsonSchema: JSONSchema6;
    oldSchemas: Record<string, OS3Schema>;
};
```

## jsonParameter

```ts
jsonParameter: JsonParameter;
```

## jsonSchema

```ts
jsonSchema: JSONSchema6;
```

## oldSchemas

```ts
oldSchemas: Record<string, OS3Schema>;
```
