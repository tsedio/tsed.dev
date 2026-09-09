---
url: /api/specs/schema/types/decorators/common/decorator-allow.md
description: api documentation of Allow from @tsed/schema
---

## Usage

```typescript
import { Allow } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/allow.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/allow.ts#L0-L0).

## Overview

```ts
function Allow(...values: any[]): any;
```

* **values** (`any[]`): - Values to allow even when the field is required (can include a model class)

## Description

Adds specific values to the list of allowed values for required properties or parameters.

When a property or parameter is marked as required, it typically rejects `null`, `undefined`,
and empty strings. The `@Allow()` decorator lets you explicitly permit certain values that
would otherwise fail required validation.

### Common Use Case: Allow Empty Strings

By default, required fields reject empty strings. Use `@Allow("")` to permit them:

```typescript
class UserModel {
  @Required()
  @Allow("")  // Empty string is now valid even though field is required
  nickname: string;
}
```

### On Method Parameters

```typescript
@Post("/")
async createUser(
  @Allow("")
  @BodyParams("nickname")
  nickname: string  // Empty string allowed, but null/undefined still rejected
) {
  // nickname can be "" but not null/undefined
}
```

### Multiple Allowed Values

```typescript
class ConfigModel {
  @Required()
  @Allow(null, "", 0)  // Allow null, empty string, or zero
  threshold: number | null;
}
```

### Combining with Type Specification

You can specify a model type along with allowed values:

```typescript
class FormData {
  @Allow("", SomeModel)  // Allow empty string or a SomeModel instance
  data: SomeModel;
}
```

### Behavior

* For **parameters**: Automatically marks the parameter as required
* For **properties**: Automatically adds the property to the required list
* Adds specified values to the schema's allowedRequiredValues list

### Validation Logic

Required validation will pass if the value is:

* Not `null`, `undefined`, or `""` (default required behavior)
* OR one of the values specified in `@Allow()`
