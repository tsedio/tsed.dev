---
url: /api/specs/schema/types/domain/class-discriminator.md
description: api documentation of Discriminator from @tsed/schema
---

## Usage

```typescript
import { Discriminator } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonDiscriminator.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonDiscriminator.ts#L0-L0).

## Overview

```ts
class Discriminator {
    propertyName: string;
    base: Type<any>;
    values: Map<string, Type>;
    types: Map<Type, string[]>;
    constructor({ base, propertyName, types, values }?: Partial<{
        base: Type<any>;
        propertyName: string;
        values: Map<string, Type<any>>;
        types: Map<Type, string[]>;
    }>);
    add(type: Type<string>, values: string[]): this;
    getType(discriminatorValue: string): Type<any>;
    getValues(type: Type): string[] | undefined;
    getDefaultValue(type: Type<any>): string | undefined;
    children(): Type<any>[];
}
```

## Description

Manages discriminator mappings for polymorphic type resolution.

A discriminator enables polymorphism in schemas by using a specific property
value to determine which subtype schema to apply. This is essential for
inheritance hierarchies and union types in OpenAPI specifications.

### Concept

When a base class has multiple derived classes, the discriminator property
(e.g., "type", "kind") indicates which concrete class an object represents.

### Usage

```typescript
// Base class
@DiscriminatorKey("type")
abstract class Animal {
  type: string;
}

// Derived classes
@DiscriminatorValue("dog")
class Dog extends Animal {
  breed: string;
}

@DiscriminatorValue("cat")
class Cat extends Animal {
  indoor: boolean;
}
```

### OpenAPI Mapping

Generates OpenAPI discriminator objects:

```json
{
  "discriminator": {
    "propertyName": "type",
    "mapping": {
      "dog": "#/components/schemas/Dog",
      "cat": "#/components/schemas/Cat"
    }
  }
}
```

### Key Features

* **Type Mapping**: Maps discriminator values to TypeScript classes
* **Bidirectional Lookup**: Find type by value or values by type
* **Default Values**: Get the default discriminator value for a type
* **Children Discovery**: List all derived types

## propertyName

```ts
propertyName: string;
```

## base

```ts
base: Type<any>;
```

## values

```ts
values: Map<string, Type>;
```

## types

```ts
types: Map<Type, string[]>;
```

## add

```ts
add(type: Type<string>, values: string[]): this;
```

## getType

```ts
getType(discriminatorValue: string): Type<any>;
```

## getValues

```ts
getValues(type: Type): string[] | undefined;
```

## getDefaultValue

```ts
getDefaultValue(type: Type<any>): string | undefined;
```

## children

```ts
children(): Type<any>[];
```
