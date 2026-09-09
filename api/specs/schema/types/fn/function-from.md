---
url: /api/specs/schema/types/fn/function-from.md
description: api documentation of from from @tsed/schema
---

## Usage

```typescript
import { from } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/from.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/from.ts#L0-L0).

## Overview

```ts
function from<TC extends Type<any> = Type<any>>(): JsonSchema<CtorToType<ObjectConstructor>>;
export function from<TC extends Type<any> = Type<any>>(type?: TC): JsonSchema<CtorToType<TC>>;
```

## Description

Create a new local schema instance from the given type.

When the input is a class, `from()` returns a cloned `JsonSchema` that can be
composed safely without mutating the schema stored on the class metadata.
This makes `from()` the functional entry point for schema composition.

Use @@get@@ when you intentionally need the shared class schema in order to
patch or extend the metadata attached to a class definition.

```typescript
from(String)
from(UserModel).description("Local description")
```

See @@JsonSchema@@ to discover available methods.
