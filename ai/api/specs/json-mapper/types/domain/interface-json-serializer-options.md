---
title: JsonSerializerOptions from @tsed/json-mapper
description: api documentation of JsonSerializerOptions from @tsed/json-mapper
meta:
 - name: keywords
   description: api typescript node.js documentation JsonSerializerOptions interface
---
# JsonSerializerOptions - @tsed/json-mapper

## Usage

```typescript
import { JsonSerializerOptions } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonSerializerOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonSerializerOptions.ts#L0-L0).

## Overview

```ts
interface JsonSerializerOptions<T = any, C = any> extends MetadataTypes<T, C>, Pick<JsonMapperGlobalOptions, "strictGroups"> {
    types?: Map<Type<any> | Symbol | string, JsonMapperMethods>;
    useAlias?: boolean;
    [key: string]: any;
}
```

<!-- Description -->

## Description

Options accepted by the `JsonSerializer`. They describe the target type, alias strategy,
additional type mappers, and group handling.

<!-- Members -->

## types

```ts
types?: Map<Type<any> | Symbol | string, JsonMapperMethods>;
```

Types used to map complex types (Symbol, Number, String, etc...)

## useAlias

```ts
useAlias?: boolean;
```

useAlias mapping

## \[key: string]

```ts
[key: string]: any;
```
