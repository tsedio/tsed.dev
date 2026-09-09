---
title: JsonMethodStore from @tsed/schema
description: api documentation of JsonMethodStore from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonMethodStore class
---
# JsonMethodStore - @tsed/schema

## Usage

```typescript
import { JsonMethodStore } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonMethodStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonMethodStore.ts#L0-L0).

## Overview

```ts
class JsonMethodStore extends JsonEntityStore {
    readonly parent: JsonClassStore;
    middlewares: any[];
    beforeMiddlewares: any[];
    afterMiddlewares: any[];
    readonly operation: JsonOperation;
    readonly children: Map<string | number, JsonParameterStore>;
    constructor(options: JsonEntityStoreOptions);
    get params(): JsonParameterStore[];
    get view(): JsonViewOptions;
    set view(view: JsonViewOptions);
    get acceptMimes(): string[];
    set acceptMimes(mimes: string[]);
    get parameters(): JsonParameterStore[];
    get operationPaths(): Map<string, import("../../domain/JsonOperation.js").JsonMethodPath>;
    get collectionType(): Type<any>;
    set collectionType(type: Type<any>);
    get isCollection(): boolean;
    get schema(): JsonSchema;
    getResponseOptions(status: number, { contentType, includes }?: {
        contentType?: string;
        includes?: string[];
    }): undefined | any;
    before(args: Function[]): this;
    after(args: Function[]): this;
    use(args: Function[]): this;
    get<T = any>(key: any): T;
    getParamTypes(): Record<string, boolean>;
    build(): void;
}
```

<!-- Description -->

## Description

Store for method metadata, operations, and parameter information.

JsonMethodStore manages metadata for controller methods decorated with operation
decorators like `@Get()`, `@Post()`, `@Returns()`, etc. It maintains the JsonOperation
for OpenAPI generation and coordinates method parameters.

### Responsibilities

-   **Operation Management**: Maintains JsonOperation for OpenAPI spec generation
-   **Parameter Coordination**: Manages child JsonParameterStore instances
-   **Middleware Configuration**: Handles before/after/use middleware registration
-   **Response Configuration**: Manages return types and status codes
-   **Route Information**: Stores HTTP methods, paths, and route metadata

### Usage

```typescript
// Get method store
const methodStore = getJsonEntityStore(MyController, "myMethod");

// Access operation for OpenAPI
const operation = methodStore.operation;

// Get parameters
const params = methodStore.parameters;

// Check response type
const returnType = methodStore.type;
```

### Operation Structure

Each method store contains a JsonOperation that includes:

-   HTTP method and path information
-   Request parameters (path, query, body, headers)
-   Response definitions by status code
-   Security requirements
-   Tags and metadata

### Parameter Management

The store maintains parameter metadata:

-   Parameters stored in `children` map by index
-   Accessible via `parameters` or `params` getters
-   Each parameter has its own JsonParameterStore

### Middleware Integration

Supports three middleware phases:

-   **before**: Execute before the method
-   **use**: Execute as main middleware
-   **after**: Execute after the method

<!-- Members -->

## readonly parent

```ts
readonly parent: JsonClassStore;
```

## middlewares

```ts
middlewares: any[];
```

## beforeMiddlewares

```ts
beforeMiddlewares: any[];
```

## afterMiddlewares

```ts
afterMiddlewares: any[];
```

## readonly operation

```ts
readonly operation: JsonOperation;
```

Ref to JsonOperation when the decorated object is a method.

## readonly children

```ts
readonly children: Map<string | number, JsonParameterStore>;
```

List of children JsonEntityStore (properties or methods or params)

## get params

```ts
get params(): JsonParameterStore[];
```

## get view

```ts
get view(): JsonViewOptions;
```

## set view

```ts
set view(view: JsonViewOptions);
```

## get acceptMimes

```ts
get acceptMimes(): string[];
```

## set acceptMimes

```ts
set acceptMimes(mimes: string[]);
```

## get parameters

```ts
get parameters(): JsonParameterStore[];
```

## get operationPaths

```ts
get operationPaths(): Map<string, import("../../domain/JsonOperation.js").JsonMethodPath>;
```

## get collectionType

```ts
get collectionType(): Type<any>;
```

## set collectionType

```ts
set collectionType(type: Type<any>);
```

## get isCollection

```ts
get isCollection(): boolean;
```

## get schema

```ts
get schema(): JsonSchema;
```

## getResponseOptions

```ts
getResponseOptions(status: number, { contentType, includes }?: {
     contentType?: string;
     includes?: string[];
 }): undefined | any;
```

TODO must be located on JsonOperation level directly

## before

```ts
before(args: Function[]): this;
```

Append middlewares to the beforeMiddlewares list.

## after

```ts
after(args: Function[]): this;
```

Append middlewares to the afterMiddlewares list.

## use

```ts
use(args: Function[]): this;
```

Store all arguments collected via Annotation.

## get

```ts
get<T = any>(key: any): T;
```

Find the value at the controller level. Let this value be extended or overridden by the endpoint itself.

## getParamTypes

```ts
getParamTypes(): Record<string, boolean>;
```

## build

```ts
build(): void;
```
