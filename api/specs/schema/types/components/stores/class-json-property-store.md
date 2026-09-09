---
url: /api/specs/schema/types/components/stores/class-json-property-store.md
description: api documentation of JsonPropertyStore from @tsed/schema
---

## Usage

```typescript
import { JsonPropertyStore } from "@tsed/schema";
```

> See [/packages/specs/schema/src/components/stores/JsonPropertyStore.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/components/stores/JsonPropertyStore.ts#L0-L0).

## Overview

```ts
class JsonPropertyStore extends JsonEntityStore {
    readonly parent: JsonClassStore;
    build(): void;
}
```

## Description

Store for property metadata and schema information.

JsonPropertyStore manages metadata for class properties decorated with schema decorators
like `@Property()`, `@Required()`, `@MinLength()`, etc. It handles schema generation,
type resolution, and integration with the parent class schema.

### Responsibilities

* **Schema Generation**: Creates and maintains the JsonSchema for the property
* **Type Resolution**: Resolves property types including primitives, classes, and collections
* **Parent Integration**: Registers the property schema with the parent class schema
* **Collection Handling**: Special handling for arrays, Sets, Maps, and other collections

### Usage

```typescript
// Get property store
const propertyStore = JsonPropertyStore.get(MyClass, "propertyName");

// Access property schema
const schema = propertyStore.schema;

// Check property type
const type = propertyStore.type;
const isCollection = propertyStore.isCollection;
```

### Schema Integration

When a property is decorated, this store:

1. Resolves the property's TypeScript type
2. Creates an appropriate JsonSchema
3. Registers it in the parent class's `properties` object
4. Handles collection item schemas for arrays/collections

### Type Handling

* **Primitives**: Creates schema with appropriate type (string, number, boolean, etc.)
* **Classes**: Creates object schema with reference to the class schema
* **Collections**: Creates array schema with item type schema

## readonly parent

```ts
readonly parent: JsonClassStore;
```

## build

```ts
build(): void;
```
