---
title: CustomKey from @tsed/schema
description: api documentation of CustomKey from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation CustomKey decorator
---
# CustomKey - @tsed/schema

## Usage

```typescript
import { CustomKey } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/customKey.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/customKey.ts#L0-L0).

## Overview

```ts
function CustomKey(key: string, value: any): (...args: any[]) => any;
```

-   **key** (`string`): - The custom key name (use `x-` prefix for vendor extensions)

-   **value** (`any`): - The value to associate with the key

<!-- Description -->

## Description

Adds a custom key-value pair to the JSON Schema that is not part of the official spec.

The `@CustomKey()` decorator allows adding vendor-specific extensions or custom metadata
to schemas. These custom keys are only included in the generated schema when explicitly
requested with the `customKeys: true` option in `compile()`.

### Basic Usage

```typescript
class UserModel {
  @CustomKey("x-internal-id", "USER_001")
  @Property()
  username: string;
}
```

### Vendor Extensions

Following OpenAPI conventions, use `x-` prefix for custom extensions:

```typescript
class ApiModel {
  @CustomKey("x-visibility", "internal")
  @CustomKey("x-deprecated-by", "newField")
  @Property()
  oldField: string;
}
```

### Documentation Metadata

```typescript
class ProductModel {
  @CustomKey("x-example-source", "marketing-team")
  @CustomKey("x-last-reviewed", "2024-01-15")
  @Property()
  description: string;
}
```

### Integration Hints

```typescript
class DataModel {
  @CustomKey("x-database-column", "user_full_name")
  @CustomKey("x-searchable", true)
  @Property()
  fullName: string;
}
```

### Retrieving Custom Keys

Custom keys must be explicitly requested:

```typescript
import { compile } from "@tsed/schema";

const schema = compile(UserModel, { customKeys: true });
// Schema will include x-internal-id and other custom keys

const standardSchema = compile(UserModel);
// Custom keys are omitted by default
```

### Use Cases

-   **OpenAPI Extensions**: Add vendor-specific OpenAPI extensions
-   **Tool Integration**: Metadata for code generators or documentation tools
-   **Internal Tracking**: Development or operational metadata
-   **Feature Flags**: Schema-level feature flag information
-   **Database Mapping**: ORM or database column hints
