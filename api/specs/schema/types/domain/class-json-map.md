---
url: /api/specs/schema/types/domain/class-json-map.md
description: api documentation of JsonMap from @tsed/schema
---

## Usage

```typescript
import { JsonMap } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonMap.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonMap.ts#L0-L0).

## Overview

```ts
class JsonMap<T> extends Map<string, any> {
    [key: string]: any;
    $kind: string;
    readonly $isJsonDocument = true;
    constructor(obj?: Partial<T>);
    assign(obj?: Partial<T> & any): this;
    toJSON(options?: JsonSchemaOptions): any;
}
```

## Description

Base class for JSON document representations using a Map structure.

JsonMap provides a Map-based foundation for storing and manipulating JSON-compatible
data structures. It extends the native Map with additional features for assignment,
serialization, and mapper integration.

This class serves as the base for many Ts.ED schema classes including JsonOperation,
JsonParameter, JsonResponse, and JsonRequestBody.

### Usage

```typescript
class MyJsonDoc extends JsonMap<{name: string; value: number}> {
  // Custom methods
}

const doc = new MyJsonDoc({name: "test", value: 42});
const json = doc.toJSON();
```

### Key Features

* **Map Interface**: Full Map API support for key-value operations
* **Fluent Assignment**: Assign multiple properties via object
* **Serialization**: Convert to plain JSON via mapper system
* **Type Safety**: Generic type parameter for stored values

## \[key: string]

```ts
[key: string]: any;
```

## $kind

```ts
$kind: string;
```

## readonly $isJsonDocument

```ts
readonly $isJsonDocument = true;
```

## assign

```ts
assign(obj?: Partial<T> & any): this;
```

## toJSON

```ts
toJSON(options?: JsonSchemaOptions): any;
```
