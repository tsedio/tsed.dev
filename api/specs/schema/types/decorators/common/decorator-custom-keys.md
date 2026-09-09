---
url: /api/specs/schema/types/decorators/common/decorator-custom-keys.md
description: api documentation of CustomKeys from @tsed/schema
---

## Usage

```typescript
import { CustomKeys } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/customKey.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/customKey.ts#L0-L0).

## Overview

```ts
function CustomKeys(obj: Record<string, any>): (...args: any[]) => any;
```

* **obj** (`Record<string`): - Object containing custom key-value pairs

## Description

Adds multiple custom key-value pairs to the JSON Schema in one decorator.

The `@CustomKeys()` decorator is a convenience function for adding multiple custom
keys at once. Like `@CustomKey()`, these keys are only included when explicitly
requested with `customKeys: true`.

### Basic Usage

```typescript
class ProductModel {
  @CustomKeys({
    "x-internal-code": "PROD-123",
    "x-category": "electronics",
    "x-priority": "high"
  })
  @Property()
  name: string;
}
```

### Multiple Vendor Extensions

```typescript
class ApiEndpoint {
  @CustomKeys({
    "x-rate-limit": 100,
    "x-requires-auth": true,
    "x-cache-ttl": 3600,
    "x-deprecated": false
  })
  @Property()
  endpoint: string;
}
```

### Equivalent to Multiple @CustomKey

These are equivalent:

```typescript
// Using @CustomKeys
@CustomKeys({ "x-foo": "bar", "x-baz": "qux" })
field: string;

// Using multiple @CustomKey
@CustomKey("x-foo", "bar")
@CustomKey("x-baz", "qux")
field: string;
```

### Use Cases

* **Bulk Metadata**: Add multiple related custom properties efficiently
* **Configuration**: Group related custom configuration values
* **Tool Directives**: Multiple hints for code generation or documentation
