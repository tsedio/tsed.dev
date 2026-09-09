---
url: /api/specs/schema/types/domain/class-json-operation-route.md
description: api documentation of JsonOperationRoute from @tsed/schema
---

## Usage

```typescript
import { JsonOperationRoute } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonOperationRoute.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonOperationRoute.ts#L0-L0).

## Overview

```ts
class JsonOperationRoute<Entity extends JsonMethodStore = JsonMethodStore> {
    readonly token: Type<any>;
    readonly endpoint: Entity;
    readonly operationPath?: JsonMethodPath;
    readonly basePath?: string;
    readonly paramsTypes: Record<string, boolean>;
    constructor(options: Partial<JsonOperationRoute>);
    get url(): any;
    get path(): string | RegExp | undefined;
    get fullPath(): any;
    get method(): string;
    get name(): string;
    get className(): string;
    get methodClassName(): string;
    get parameters(): import("@tsed/schema").JsonParameterStore[];
    get propertyKey(): string;
    get propertyName(): string;
    get store(): import("@tsed/core").Store;
    get operation(): JsonOperation;
    get operationId(): any;
    has(key: string): boolean;
}
```

## Description

Represents a fully resolved HTTP route combining controller and method metadata.

JsonOperationRoute provides a unified view of an HTTP endpoint by combining:

* Controller class information (token, basePath)
* Method metadata (endpoint store)
* Operation details (HTTP method, path, parameters)
* Full URL computation

### Responsibilities

* **URL Resolution**: Combines base path and operation path into full URL
* **Metadata Access**: Provides convenient access to operation, parameters, and store
* **Route Identification**: Computes route names and operation IDs
* **Parameter Type Tracking**: Maintains map of parameter types (query, body, etc.)

### Usage

```typescript
// Routes are typically created during framework initialization
const route = new JsonOperationRoute({
  token: MyController,
  endpoint: methodStore,
  operationPath: { method: "GET", path: "/:id" },
  basePath: "/users"
});

// Access route information
console.log(route.fullPath);  // "/users/:id"
console.log(route.method);     // "GET"
console.log(route.name);       // "MyController.getUser()"
console.log(route.operationId); // "getUser"
```

### URL Construction

The route combines controller base path with operation path:

* Base path: `/users` (from `@Controller("/users")`)
* Operation path: `/:id` (from `@Get("/:id")`)
* Full path: `/users/:id`

### Parameter Type Detection

The route maintains a map of parameter types present in the operation:

```typescript
route.has("query")  // true if operation has @QueryParams
route.has("body")   // true if operation has @BodyParams
route.has("path")   // true if operation has @PathParams
```

## readonly token

```ts
readonly token: Type<any>;
```

## readonly endpoint

```ts
readonly endpoint: Entity;
```

## readonly operationPath

```ts
readonly operationPath?: JsonMethodPath;
```

## readonly basePath

```ts
readonly basePath?: string;
```

## readonly paramsTypes

```ts
readonly paramsTypes: Record<string, boolean>;
```

## get url

```ts
get url(): any;
```

## get path

```ts
get path(): string | RegExp | undefined;
```

## get fullPath

```ts
get fullPath(): any;
```

## get method

```ts
get method(): string;
```

## get name

```ts
get name(): string;
```

## get className

```ts
get className(): string;
```

## get methodClassName

```ts
get methodClassName(): string;
```

## get parameters

```ts
get parameters(): import("@tsed/schema").JsonParameterStore[];
```

## get propertyKey

```ts
get propertyKey(): string;
```

## get propertyName

```ts
get propertyName(): string;
```

## get store

```ts
get store(): import("@tsed/core").Store;
```

## get operation

```ts
get operation(): JsonOperation;
```

## get operationId

```ts
get operationId(): any;
```

## has

```ts
has(key: string): boolean;
```
