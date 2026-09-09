---
url: /api/specs/schema/types/decorators/common/decorator-optional.md
description: api documentation of Optional from @tsed/schema
---

## Usage

```typescript
import { Optional } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/optional.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/optional.ts#L0-L0).

## Overview

```ts
function Optional(): (...args: any[]) => any;
```

## Description

Marks a property or parameter as optional, meaning it can be omitted from the input.

The `@Optional()` decorator removes the property from the required fields list in the
schema, allowing it to be absent from the object. For parameters, it marks them as
not required in the method signature.

### On Properties

```typescript
class UserModel {
  @Property()
  name: string;  // Required by default

  @Optional()
  @Property()
  nickname?: string;  // Optional - can be omitted
}
```

### On Parameters

```typescript
@Controller("/users")
class UserController {
  @Get("/:id")
  async get(
    @PathParams("id") id: string,
    @Optional()
    @QueryParams("include") include?: string  // Optional query param
  ) {
    // include can be undefined
  }
}
```

### With Default Values

```typescript
class ConfigModel {
  @Optional()
  @Default(10)
  timeout?: number;
  // Optional field with a default value
}
```

### vs Nullable

* `@Optional()`: Field can be **omitted** entirely from the object
* `@Nullable()`: Field must be **present** but can have value `null`
* Can combine: `@Optional() @Nullable(String)` allows omitted, null, or string

### Examples

```typescript
// Optional only - field can be omitted
@Optional()
field1?: string;
// Valid: {} or { field1: "value" }
// Invalid: { field1: null }

// Nullable only - field must be present
@Nullable(String)
field2: string | null;
// Valid: { field2: null } or { field2: "value" }
// Invalid: {}

// Both - maximum flexibility
@Optional()
@Nullable(String)
field3?: string | null;
// Valid: {}, { field3: null }, { field3: "value" }
```

### Use Cases

* **Optional Configuration**: Non-required config properties
* **Query Parameters**: Optional filters and options in APIs
* **Partial Updates**: PATCH endpoints where only changed fields are sent
* **Progressive Enhancement**: Features that aren't required for basic functionality

### TypeScript Integration

Use TypeScript's optional property syntax (`?:`) alongside `@Optional()` for
type safety:

```typescript
class Model {
  @Optional()
  optionalField?: string;  // TypeScript knows it can be undefined
}
```
