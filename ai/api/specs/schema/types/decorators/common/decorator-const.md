---
title: Const from @tsed/schema
description: api documentation of Const from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Const decorator
---
# Const - @tsed/schema

## Usage

```typescript
import { Const } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/const.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/const.ts#L0-L0).

## Overview

```ts
function Const(constValue: JSONSchema6Type | any): (...args: any[]) => any;
```

-   **constValue** (`JSONSchema6Type` | `any`): - The exact value that this property must have

<!-- Description -->

## Description

Restricts a property to a single fixed value using JSON Schema's `const` keyword.

The `@Const()` decorator ensures that a property must have exactly the specified value.
This is useful for literal types, discriminator fields, API version indicators, and
other cases where only one specific value is valid.

### String Constants

```typescript
class ApiResponse {
  @Const("success")
  status: "success";
  // Only "success" is valid, any other value fails validation
}
```

Generated schema:

```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "const": "success"
    }
  }
}
```

### Number Constants

```typescript
class ConfigModel {
  @Const(1)
  version: 1;
  // Only version 1 is accepted
}
```

### Boolean Constants

```typescript
class FeatureFlag {
  @Const(true)
  enabled: true;
  // Must always be true
}
```

### Discriminator Pattern

```typescript
class DogAnimal {
  @Const("dog")
  type: "dog";

  @Property()
  breed: string;
}

class CatAnimal {
  @Const("cat")
  type: "cat";

  @Property()
  indoor: boolean;
}
```

### API Versioning

```typescript
class V2Request {
  @Const("v2")
  apiVersion: "v2";

  @Property()
  data: any;
}
```

### Use Cases

-   **Type Discriminators**: Distinguish between union type variants
-   **Literal Types**: Enforce TypeScript literal types at runtime
-   **API Versioning**: Validate API version in requests
-   **Status Fields**: Ensure specific status values in responses
-   **Configuration**: Lock configuration values to specific constants

### vs Enum

-   `@Const()`: Single fixed value only
-   `@Enum()`: Multiple allowed values from a set
