---
title: JsonLazyRef from @tsed/schema
description: api documentation of JsonLazyRef from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation JsonLazyRef class
---
# JsonLazyRef - @tsed/schema

## Usage

```typescript
import { JsonLazyRef } from "@tsed/schema";
```

> See [/packages/specs/schema/src/domain/JsonLazyRef.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonLazyRef.ts#L0-L0).

## Overview

```ts
class JsonLazyRef {
    readonly getType: () => Type<any>;
    readonly isLazyRef = true;
    constructor(getType: () => Type<any>);
    get target(): Type<any>;
    get schema(): import("@tsed/schema").JsonSchema<import("json-schema").JSONSchema7Type>;
    get name(): string;
}
```

<!-- Description -->

## Description

Lazy reference to a schema type for handling circular dependencies.

JsonLazyRef provides a deferred reference mechanism for types that may not be
available at decoration time due to circular dependencies or forward references.
The actual type is resolved lazily when needed, avoiding initialization order issues.

### Usage

```typescript
class User {
  @Property()
  name: string;

  // Circular reference - user has a manager who is also a user
  @Property()
  manager: User; // Internally uses lazy ref
}
```

### Use Cases

-   **Circular Dependencies**: Classes that reference themselves or each other
-   **Forward References**: References to classes defined later in the file
-   **Conditional Imports**: Types that may not be available immediately

### How It Works

The lazy ref wraps a function that returns the type, delaying type resolution
until the schema is actually needed during schema generation.

<!-- Members -->

## readonly getType:

```ts
readonly getType: () => Type<any>;
```

## readonly isLazyRef

```ts
readonly isLazyRef = true;
```

## get target

```ts
get target(): Type<any>;
```

## get schema

```ts
get schema(): import("@tsed/schema").JsonSchema<import("json-schema").JSONSchema7Type>;
```

## get name

```ts
get name(): string;
```
