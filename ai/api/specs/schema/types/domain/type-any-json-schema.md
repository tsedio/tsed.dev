---
title: AnyJsonSchema from @tsed/schema
description: api documentation of AnyJsonSchema from @tsed/schema
meta:
 - name: keywords
   description: api typescript node.js documentation AnyJsonSchema type
---
# AnyJsonSchema - @tsed/schema

## Usage

```typescript
import { AnyJsonSchema } from "@tsed/specs/schema/src/domain/JsonSchema";
```

> See [/packages/specs/schema/src/domain/JsonSchema.ts](https://github.com/tsedio/tsed/blob/v8.38.4/packages/specs/schema/src/domain/JsonSchema.ts#L0-L0).

## Overview

```ts
type AnyJsonSchema<T = any> = JsonSchemaObject | JSONSchema7 | JsonSchema<T> | JsonLazyRef | {
    label?: string;
} | Type;
```

<!-- Description -->

## Description

Union type representing any valid JSON schema representation.

This type accepts various schema formats including standard JSON Schema objects,
Ts.ED JsonSchema instances, lazy references, TypeScript classes, and label objects.
It provides maximum flexibility for schema definition across the framework.

<!-- Members -->

## label

```ts
label?: string;
```
