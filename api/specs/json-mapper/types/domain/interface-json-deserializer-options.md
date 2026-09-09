---
url: /api/specs/json-mapper/types/domain/interface-json-deserializer-options.md
description: api documentation of JsonDeserializerOptions from @tsed/json-mapper
---

## Usage

```typescript
import { JsonDeserializerOptions } from "@tsed/json-mapper";
```

> See [/packages/specs/json-mapper/src/domain/JsonDeserializerOptions.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/json-mapper/src/domain/JsonDeserializerOptions.ts#L0-L0).

## Overview

```ts
interface JsonDeserializerOptions<T = any, C = any> extends MetadataTypes<T, C>, JsonMapperGlobalOptions {
    types?: Map<Type | Symbol | string, JsonMapperMethods>;
    useAlias?: boolean;
    store?: JsonEntityStore;
    groups?: string[] | false;
    generics?: GenericsMap;
    [key: string]: any;
}
```

## Description

Options accepted by the `JsonDeserializer`. They describe the target type,
collection strategy, additional mapper types, and hook configuration used while materializing data.

## types

```ts
types?: Map<Type | Symbol | string, JsonMapperMethods>;
```

Types used to map complex types (Symbol, Array, Set, Map)

## useAlias

```ts
useAlias?: boolean;
```

useAlias mapping

## store

```ts
store?: JsonEntityStore;
```

Use the store which have all metadata to deserialize correctly the model. This
property is useful when you deal with metadata parameters.

## groups

```ts
groups?: string[] | false;
```

## generics

```ts
generics?: GenericsMap;
```

Add types to deserialize a module using the generics feature.

## \[key: string]

```ts
[key: string]: any;
```
