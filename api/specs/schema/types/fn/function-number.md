---
url: /api/specs/schema/types/fn/function-number.md
description: api documentation of number from @tsed/schema
---

## Usage

```typescript
import { number } from "@tsed/schema";
```

> See [/packages/specs/schema/src/fn/number.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/fn/number.ts#L0-L0).

## Overview

```ts
function number(): import("@tsed/schema").JsonSchema<number>;
```

## Description

Create a number schema programmatically.

This function provides a fluent API for building number schemas without decorators.
It returns a JsonSchema instance configured for number type, which can be further
customized with validation constraints and other JSON Schema properties.

### Usage

```typescript
import {number} from "@tsed/schema";

// Basic number schema
const ageSchema = number();

// Number with range constraints
const priceSchema = number()
  .minimum(0)
  .maximum(999999.99)
  .description("Product price in USD");

// Integer with exclusive bounds
const scoreSchema = number()
  .integer()
  .exclusiveMinimum(0)
  .exclusiveMaximum(100);

// Multiple of constraint
const quantitySchema = number()
  .multipleOf(5)
  .minimum(0)
  .description("Quantity in packs of 5");
```

### Available Methods

The returned JsonSchema provides many chainable methods:

* `minimum(n)` / `maximum(n)` - Range constraints (inclusive)
* `exclusiveMinimum(n)` / `exclusiveMaximum(n)` - Range constraints (exclusive)
* `multipleOf(n)` - Value must be multiple of n
* `integer()` - Restrict to integers only
* `description(text)` - Add description
* `default(value)` - Set default value
* `nullable()` - Allow null values
