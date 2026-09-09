---
url: /api/specs/schema/types/decorators/common/decorator-nullable.md
description: api documentation of Nullable from @tsed/schema
---

## Usage

```typescript
import { Nullable } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/nullable.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/nullable.ts#L0-L0).

## Overview

```ts
function Nullable(type: JSONSchema6TypeName | Type<any> | any, ...types: (JSONSchema6TypeName | Type<any> | any)[]): any;
```

* **type** (`JSONSchema6TypeName` | `Type<any>` | `any`): - The primary type that can be null

* **types** (`(JSONSchema6TypeName` | `Type<any>` | `any)[]`): - Additional types that can be null (creates multi-type union with null)

## Description

Marks a property as nullable, allowing it to accept `null` in addition to its base type.

The `@Nullable()` decorator creates a union type that includes `null` alongside the
specified type(s). This is implemented using JSON Schema's `oneOf` keyword to allow
either the specified type or null.

### Single Type with Null

```typescript
class UserModel {
  @Nullable(Date)
  lastLogin: Date | null;
  // Accepts: Date object OR null
}
```

### Multiple Types with Null

```typescript
class FlexibleModel {
  @Nullable(String, Number, Boolean)
  property: string | number | boolean | null;
  // Accepts: string OR number OR boolean OR null
}
```

### With Custom Classes

```typescript
class Address {
  @Property()
  street: string;
}

class Person {
  @Nullable(Address)
  address: Address | null;
  // Accepts: Address object OR null
}
```

### TypeScript Integration

```typescript
class Product {
  @Nullable(String)
  description: string | null;

  @Nullable(Number)
  discount: number | null;
}
```

### Important: Arrays

Do NOT use `@Nullable(Array)` as it produces incorrect schemas. Instead:

```typescript
// Wrong
@Nullable(Array)
items: any[] | null;

// Correct
@Schema(array().items().nullable())
items: any[] | null;
```

### Use Cases

* **Optional Database Fields**: Model nullable database columns
* **Partial Updates**: Allow fields to be explicitly set to null in PATCH requests
* **Default Values**: Distinguish between "not provided" and "explicitly null"
* **External APIs**: Match nullable fields from third-party services

### vs Optional

* `@Nullable()`: Field can be present with value `null`
* `@Optional()`: Field can be omitted entirely
* Can combine both: `@Optional() @Nullable(String)` allows omitted, null, or string
