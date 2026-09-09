---
title: from from @tsed/schema
description: api documentation of from from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation from function
---
# from - @tsed/schema

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

<!-- Description -->

## Description

Create a new local schema instance from the given type.

When the input is a class, `from()` returns a cloned `JsonSchema` that can be
composed safely without mutating the schema stored on the class metadata.
This makes `from()` the functional entry point for schema composition.

Use [get](/ai/api/specs/schema/types/fn/function-get.md) when you intentionally need the shared class schema in order to
patch or extend the metadata attached to a class definition.

```typescript
from(String)
from(UserModel).description("Local description")
```

See [JsonSchema](/ai/api/specs/schema/types/domain/class-json-schema.md) to discover available methods.
