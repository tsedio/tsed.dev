---
title: Required from @tsed/schema
description: api documentation of Required from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation Required const
---
# Required - @tsed/schema

## Usage

```typescript
import { Required } from "@tsed/schema";
```

> See [/packages/specs/schema/src/decorators/common/required.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/decorators/common/required.ts#L0-L0).

## Overview

```ts
const Required: import("../../utils/withErrorMsg.js").ErrorChainedDecorator<(required?: boolean, ...allowedRequiredValues: any[]) => any>;
```

<!-- Description -->

## Description

Mark a property or parameter as required.

The `@Required()` decorator enforces that a property must have a value during
validation. It works on both model properties and method parameters, and triggers
validation errors when values are `null`, `undefined`, or empty strings.

### Usage on Properties

```typescript
class User {
  @Required()
  @Property()
  email: string;

  @Required()
  @Property()
  name: string;
}
```

### Usage on Parameters

```typescript
@Controller("/users")
class UserController {
  @Post("/")
  async create(@Required() @BodyParams() user: User) {
    // user is required in request body
  }

  @Get("/:id")
  async get(@Required() @PathParams("id") id: string) {
    // id is required in path
  }
}
```

### Validation Behavior

By default, `@Required()` rejects:

-   `null` values
-   `undefined` values
-   Empty strings (`""`)

### Allowing Specific Values

Use `@Allow()` to permit specific values that would normally be rejected:

```typescript
class Model {
  // Allow empty string but still mark as required
  @Required()
  @Allow("")
  optionalText: string;

  // Allow null
  @Required()
  @Allow(null)
  nullableField: string | null;
}
```

### Making Optional

To explicitly mark a property as optional:

```typescript
class Model {
  @Required(false) // or use @Optional()
  optionalField: string;
}
```
