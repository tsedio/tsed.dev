---
url: /api/specs/schema/types/decorators/common/decorator-property.md
description: api documentation of Property from @tsed/schema
---

## Usage

```typescript
import { Property } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/property.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/property.ts#L0-L0).

## Overview

```ts
function Property(type?: any): (...args: any[]) => any;
```

* **type** (`any`): Optional. -  type definition (class, primitive, array, or arrow function)

## Description

Declare a property on a model class for schema generation.

The `@Property()` decorator marks a class property for inclusion in generated
JSON schemas and OpenAPI specifications. It can optionally specify the property's
type, which is useful for arrays, generics, or when TypeScript's reflection
doesn't provide sufficient type information.

### Usage

```typescript
class User {
  // Basic property (type inferred from TypeScript)
  @Property()
  name: string;

  // Property with explicit type
  @Property(Number)
  age: number;

  // Array property
  @Property([String])
  tags: string[];

  // Nested model
  @Property(Address)
  address: Address;

  // Generic/complex type
  @Property(() => User)
  manager: User;
}
```

### When to Use Explicit Types

* **Arrays**: Always specify array item types: `@Property([String])`
* **Generics**: Provide concrete types for generic classes
* **Forward References**: Use arrow functions for circular dependencies
* **Complex Types**: When TypeScript metadata is insufficient
