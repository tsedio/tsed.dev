---
url: /api/specs/schema/types/fn/function-boolean.md
description: api documentation of boolean from @tsed/schema
---

## Usage

```typescript
import { boolean } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/boolean.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/boolean.ts#L0-L0).

## Overview

```ts
function boolean(): import("@tsed/schema").JsonSchema<boolean>;
```

## Description

Create a boolean schema programmatically.

This function provides a fluent API for building boolean schemas without decorators.
It returns a JsonSchema instance configured for boolean type, which can be further
customized with descriptions, defaults, and other JSON Schema properties.

### Usage

```typescript
import {boolean} from "@tsed/schema";

// Basic boolean schema
const activeSchema = boolean();

// Boolean with description and default
const isVerifiedSchema = boolean()
  .description("Whether the user is verified")
  .default(false);

// Required boolean
const termsAcceptedSchema = boolean()
  .description("User accepted terms and conditions")
  .required();

// Nullable boolean
const optionalFlagSchema = boolean()
  .nullable()
  .description("Optional feature flag");
```

### Available Methods

The returned JsonSchema provides many chainable methods:

* `description(text)` - Add description
* `default(value)` - Set default value (true or false)
* `nullable()` - Allow null values
* `const(value)` - Restrict to a single value
