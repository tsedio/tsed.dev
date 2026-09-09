---
title: JsonParameterOptions from @tsed/schema
description: api documentation of JsonParameterOptions from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonParameterOptions type
---
# JsonParameterOptions - @tsed/schema

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

<!-- Members -->

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
