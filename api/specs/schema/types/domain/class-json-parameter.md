---
url: /api/specs/schema/types/domain/class-json-parameter.md
description: api documentation of JsonParameter from @tsed/schema
---

## Usage

```typescript
import { JsonParameter } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonParameter.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonParameter.ts#L0-L0).

## Overview

```ts
class JsonParameter extends JsonMap<OS3Parameter<JsonSchema>> {
    $kind: string;
    expression: string | undefined;
    constructor(obj?: Partial<OS3Parameter<JsonSchema>>);
    getName(): any;
    name(name: string): this;
    examples(examples: OpenSpecHash<OS3Example | OpenSpecRef>): this;
    description(description: string): this;
    in(inType: string, expression?: string | any): this;
    required(required: boolean): this;
    schema(): JsonSchema;
    schema(schema: JsonSchema): this;
    itemSchema(schema?: JsonSchema): JsonSchema<import("json-schema").JSONSchema7Type>;
    toJSON(options?: JsonSchemaOptions): any;
}
```

## Description

Represents an HTTP operation parameter for OpenAPI specifications.

JsonParameter defines a single parameter for an HTTP operation, supporting
various parameter locations (path, query, header, body, files) and providing
a fluent API for building parameter metadata compatible with OpenAPI 3.

### Parameter Types

* **path**: Parameter in the URL path (e.g., `/users/{id}`)
* **query**: Query string parameter (e.g., `?page=1`)
* **header**: HTTP header parameter
* **body**: Request body parameter
* **files**: File upload parameter

### Usage

```typescript
const param = new JsonParameter()
  .name("userId")
  .in("path")
  .required(true)
  .description("The user identifier")
  .schema(s.string());
```

### Key Features

* **Schema Integration**: Associated JSON schema for validation
* **Examples**: Support for parameter examples
* **Expression**: Custom parameter expressions for complex bindings
* **Validation**: Required/optional flags and schema constraints

## $kind

```ts
$kind: string;
```

## expression

```ts
expression: string | undefined;
```

## getName

```ts
getName(): any;
```

## name

```ts
name(name: string): this;
```

## examples

```ts
examples(examples: OpenSpecHash<OS3Example | OpenSpecRef>): this;
```

## description

```ts
description(description: string): this;
```

## in

```ts
in(inType: string, expression?: string | any): this;
```

## required

```ts
required(required: boolean): this;
```

## schema

```ts
schema(): JsonSchema;
```

## schema

```ts
schema(schema: JsonSchema): this;
```

## itemSchema

```ts
itemSchema(schema?: JsonSchema): JsonSchema<import("json-schema").JSONSchema7Type>;
```

## toJSON

```ts
toJSON(options?: JsonSchemaOptions): any;
```
