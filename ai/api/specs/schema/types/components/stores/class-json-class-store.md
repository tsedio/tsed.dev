---
title: JsonClassStore from @tsed/schema
description: api documentation of JsonClassStore from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonClassStore class
---
# JsonClassStore - @tsed/schema

## Usage

```typescript
import { JsonClassStore } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonClassStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonClassStore.ts#L0-L0).

## Overview

```ts
class JsonClassStore extends JsonEntityStore {
    readonly children: Map<string | number, JsonMethodStore | JsonPropertyStore>;
    get path(): string;
    set path(path: string);
    build(): void;
}
```

<!-- Description -->

## Description

Store for class-level metadata and schema information.

JsonClassStore manages metadata for classes decorated with schema decorators like
`@Model()`, `@Generics()`, `@DiscriminatorKey()`, etc. It serves as the root container
for all class-level schema information and coordinates child stores for properties
and methods.

### Responsibilities

-   **Schema Generation**: Creates and maintains the JsonSchema for the class
-   **Children Coordination**: Manages child PropertyStore and MethodStore instances
-   **Route Configuration**: Stores base path for controller classes
-   **Inheritance**: Handles schema inheritance from parent classes
-   **OpenAPI Integration**: Generates component schemas for OpenAPI specifications

### Usage

```typescript
// Get class store
const classStore = s.store(MyClass);

// Access class schema
const schema = s.get(MyClass);

// Get all properties
const properties = classStore.children;

// Check if it's a controller with a path
const path = classStore.path;
```

### Class Store Hierarchy

The class store acts as the root of the store hierarchy:

```
JsonClassStore (User class)
├─ JsonPropertyStore (name property)
├─ JsonPropertyStore (email property)
└─ JsonMethodStore (validate method)
   ├─ JsonParameterStore (param 0)
   └─ JsonParameterStore (param 1)
```

### Schema Structure

For a class like:

```typescript
class User {
  @Property()
  name: string;

  @Property()
  email: string;
}
```

The class store generates:

```json
{
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "email": {"type": "string"}
  }
}
```

### Controller Path

For controller classes decorated with `@Controller("/users")`, the store
maintains the base path which is used for route generation.

<!-- Members -->

## readonly children

```ts
readonly children: Map<string | number, JsonMethodStore | JsonPropertyStore>;
```

List of children JsonEntityStore (properties or methods or params)

## get path

```ts
get path(): string;
```

## set path

```ts
set path(path: string);
```

## build

```ts
build(): void;
```
