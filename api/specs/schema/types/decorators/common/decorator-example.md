---
url: /api/specs/schema/types/decorators/common/decorator-example.md
description: api documentation of Example from @tsed/schema
---

## Usage

```typescript
import { Example } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/example.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/example.ts#L0-L0).

## Overview

```ts
function Example(...examples: any[]): Function;
```

* **examples** (`any[]`): - One or more example values

## Description

Adds example values to the schema for documentation purposes.

The `@Example()` decorator provides sample values that appear in OpenAPI/Swagger
documentation, helping API consumers understand expected data formats. Multiple
examples can be provided, and they're displayed in API documentation tools.

### On Properties

```typescript
class UserModel {
  @Example("john.doe@example.com", "jane.smith@example.com")
  email: string;
}
```

### On Classes

```typescript
@Example({ name: "John", age: 30 })
@Example({ name: "Jane", age: 25 })
class PersonModel {
  @Property()
  name: string;

  @Property()
  age: number;
}
```

### Complex Objects

```typescript
class OrderModel {
  @Example(
    { id: "ORD-123", total: 99.99, items: ["item1", "item2"] },
    { id: "ORD-456", total: 149.99, items: ["item3"] }
  )
  orderData: object;
}
```

### With Validation

```typescript
class ProductModel {
  @Example("Electronics", "Clothing", "Books")
  @MinLength(3)
  @MaxLength(50)
  category: string;
}
```

### Use Cases

* **API Documentation**: Show realistic example values
* **Interactive Docs**: Populate try-it-out forms with examples
* **Code Generation**: Provide samples for client SDK generation
* **Testing**: Reference values for test cases

### Important Notes

* Examples are for documentation only, not validation
* Multiple examples can be provided
* Examples should match the property's type and constraints
* Appears in OpenAPI spec under `examples` field
