---
url: /api/specs/schema/types/components/stores/class-json-parameter-store.md
description: api documentation of JsonParameterStore from @tsed/schema
---

## Usage

```typescript
import { JsonParameterStore } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonParameterStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonParameterStore.ts#L0-L0).

## Overview

```ts
class JsonParameterStore extends JsonEntityStore {
    paramType?: string;
    expression?: string;
    dataPath?: string;
    pipes: Type<PipeMethods>[];
    readonly parameter: JsonParameter;
    readonly parent: JsonMethodStore;
    constructor(options: JsonParameterStoreOptions);
    get required(): boolean;
    set required(value: boolean);
    get allowedRequiredValues(): any[];
    get schema(): import("@tsed/schema").JsonSchema<import("json-schema").JSONSchema7Type>;
    static getParams<T extends JsonParameterStore = JsonParameterStore>(target: Type<any>, propertyKey: string | symbol): T[];
    isRequired(value: any): boolean;
    build(): void;
}
```

## Description

Store for method parameter metadata and schema information.

JsonParameterStore manages metadata for method parameters decorated with decorators
like `@BodyParams()`, `@PathParams()`, `@QueryParams()`, etc. It handles parameter
validation, transformation pipes, and OpenAPI parameter generation.

### Responsibilities

* **Parameter Definition**: Maintains JsonParameter for OpenAPI spec generation
* **Type Resolution**: Resolves parameter types from TypeScript metadata
* **Validation**: Manages required/optional state and validation rules
* **Transformation**: Coordinates pipe execution for value transformation
* **Location Tracking**: Stores where the parameter comes from (path, query, body, etc.)

### Usage

```typescript
// Get parameter store
const paramStore = JsonParameterStore.get(MyController, "myMethod", 0);

// Access parameter definition
const parameter = paramStore.parameter;

// Check if required
const isRequired = paramStore.required;

// Get all parameters for a method
const params = JsonParameterStore.getParams(MyController, "myMethod");
```

### Parameter Types

Parameters can come from different locations:

* **path**: URL path parameters (`/users/:id`)
* **query**: Query string parameters (`?page=1`)
* **body**: Request body
* **header**: HTTP headers
* **cookies**: Cookie values
* **files**: File uploads

### Validation

The store provides validation helpers:

* `required`: Marks parameter as required
* `allowedRequiredValues`: Values that bypass required check
* `isRequired(value)`: Checks if a value satisfies required constraint

### Transformation Pipes

Parameters can have transformation pipes that process values:

```typescript
@Controller("/")
class MyController {
  @Get("/:id")
  get(@PathParams("id") @UsePipe(ParseIntPipe) id: number) {
    // id is automatically transformed to number
  }
}
```

### Expression Binding

Parameters can use expressions to extract nested values:

```typescript
@BodyParams("user.address.city") city: string
// Extracts: request.body.user.address.city
```

## paramType

```ts
paramType?: string;
```

## expression

```ts
expression?: string;
```

## dataPath

```ts
dataPath?: string;
```

## pipes

```ts
pipes: Type<PipeMethods>[];
```

Define pipes can be called by the framework to transform input parameter

## readonly parameter

```ts
readonly parameter: JsonParameter;
```

Ref to JsonParameter when the decorated object is a parameter.

## readonly parent

```ts
readonly parent: JsonMethodStore;
```

## get required

```ts
get required(): boolean;
```

Return the required state.

## set required

```ts
set required(value: boolean);
```

## get allowedRequiredValues

```ts
get allowedRequiredValues(): any[];
```

## get schema

```ts
get schema(): import("@tsed/schema").JsonSchema<import("json-schema").JSONSchema7Type>;
```

## static getParams

```ts
static getParams<T extends JsonParameterStore = JsonParameterStore>(target: Type<any>, propertyKey: string | symbol): T[];
```

## isRequired

```ts
isRequired(value: any): boolean;
```

Check precondition between value, required and allowedRequiredValues to know if the entity is required.

## build

```ts
build(): void;
```
